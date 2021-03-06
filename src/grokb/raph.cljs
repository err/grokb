(ns raph)

(def width  600)
(def height 500)

(def paper  (js/Raphael. 10 50 width height))

(def hexs   ["0" "1" "2" "3" "4" "5" "6" "7" "8" "9" "a" "b" "c" "d" "e" "f"])

(defn scanimate [elt] (. elt animate (js* "{scale: [2.5, 2.5]}") 250 "elastic"))

;; (def smate (. paper animation (js* "{scale: [2.5, 2.5]}") 200 "elastic"))

(def cs (let [dx 25
	      dy 25]
	  (let [cseq (doall (for [x (range 0 width  (* 0.5 dx))
				  y (range 0 height (* 0.5 dy))
				  :let [obj   (. paper circle x y
						 (Math/floor (/ dx 4))
						 (Math/floor (/ dy 4)))
					color (apply str "hsb("
						     (/ x width ) ","
						     (/ y height)
						     ","
						     1 ;; (/ (+ y x) (+ width height))
						     ")")]]
			      (do (. obj attr "fill"   color)
				  (. obj attr "stroke" color)
				  obj)
			      ;; (. obj mouseout (fn [event]
			      ;; 			 ;; 
				  
			      ;; 			 (. obj animate (js* "{scale: [1, 1, ~{x}, ~{y}]}") 500 "elastic")))
			      ))]

	    
	    (doall (map (fn [c]
			  (let [tr (. c (transform))
				fi (. c attr "fill")
				st (. c attr "stroke")] 
			   (. c hover
			      (fn []
				(. c (toFront))
				(. c attr "fill" "#0ee")
				(. c attr "stroke" "#0ee")
				(. c animate (js* "{transform: \"s2 2\"}") 750 ">"))
			      (fn []
				;; (. c (stop))
				(. c attr "fill" fi)
				(. c attr "stroke" st)
				(. c animate (js* "{transform: \"s1 1\"}") 4000 "elastic")
				(. c transform tr)))))
			cseq))

	    ;; (. txt attr "stroke" "#111")
	    ;; (. txt attr "font-size" "20")
	    ;; (. txt (toFront))
	    )))

			     
;; // Creates canvas 320 × 200 at 10, 50
;; var paper = Raphael(10, 50, 320, 200);

;; // Creates circle at x = 50, y = 40, with radius 10
;; var circle = paper.circle(50, 40, 10);

;; // Sets the fill attribute of the circle to red (#f00)
;; circle.attr("fill", "#f00");

;; // Sets the stroke attribute of the circle to white
;; circle.attr("stroke", "#fff");