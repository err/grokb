(ns spinners
  (:require [goog.dom :as dom]
	    [clojure.string :as st])
  (:require-macros [grokb.paper.macros :as mac]))


;; js stuff
(defn kw->js [k]
  (let [nom (name k)
	parts (clojure.string/split (name k) #"-")
	caps (map clojure.string/capitalize (next parts))]
    (apply str (first parts) caps)))


;; paper stuff
(defn rgb
  "creates new RGBColor.
   expects all values to be between 0 and 1"
  ([r g b]   (rgb r g b 1))
  ([r g b a] (new (. js/paper RGBColor) r g b a)))

(defn hsb
  "creates new HSBColor
   expects h     in range [0 360]
           s,b,a in range [0 1]"
  ([h s b]   (hsb h s b 1))
  ([h s b a] (new (. js/paper HSBColor) h s b a)))


;; dom stuff
(defn get-element
  "Return the element with the passed id."
  [id]
  (dom/getElement (name id)))


(defn smooth
  "Smooths a path by changing its segment handles
    without adding or removing segment points."
  [path]
  (. path (smooth)))

(defn simplify
  "Smooths a path by analyzing its path.segments array
   and replacing it with a more optimal set of segments,
   reducing memory usage and speeding up drawing."
  [path]
  (. path (simplify)))

(defn fill-color [obj color]
  (set! (.fillColor obj) color))

(let [blend-modes #{"normal" "multiply" "screen" "overlay"
		    "soft-light" "hard-light" "color-dodge"
		    "color-burn" "darken" "lighten"
		    "difference" "exclusion"
		    "hue" "saturation" "luminosity"
		    "color" "add" "subtract"
		    "average" "pin-light" "negation"}]
  (defn blend-mode
    "Sets the blend-mode for the given object.
     Accepts keyword arguments.
     Usage:  (blend-mode my-circle :average)

     Available Blend Modes:
     :normal, :multiply, :screen, :overlay,
     :soft-light, :hard-light, :color-dodge,
     :color-burn, :darken, :lighten,
     :difference, :exclusion,
     :hue, :saturation, :luminosity,
     :color, :add, :subtract,
     :average, :pin-light, :negation"
    [obj mode]
    (let [mode (name mode)]
      (and (contains? blend-modes mode)
	   (set! (.blendMode obj) mode)))))

(defn path* []
  (new (. js/paper Path)))

(defn path
  [attrs points]
  (let [ks (map kw->js (keys attrs))
	result (path*)]
    ;; set attrs
    ;; (doseq [[k v] attrs]
    ;;   (set! ((symbol (str "." (kw->js k))) result) v))

    ;; add points to path
    (doseq [[x y] points]
      (. result add (point x y)))
    result))

(defn close-path
  [path]
  (set! (. path closed) true))

(defn point
  [x y]
  (new (. js/paper Point) x y))

(defn line
  "expects two vector arguments."
  [from to]
  (let [[x1 y1] from
	[x2 y2]   to]
    (new (. (. js/paper Path) Line) (point x1 y1) (point x2 y2))))

(defn circle [x y r]
  (new (. (. js/paper Path) Circle) (point x y) r)) 

(defn point-text [x y]
  (new (. js/paper PointText) (point x y)))

(defn make-symbol
  "creates a new Symbol.
   http://paperjs.org/reference/symbol"
  [path] (new (. js/paper Symbol) path))


(def bounds (atom [0 0]))

(defn do-thing []
  (let [canvas (get-element "canvas0")]
    (. js/paper setup canvas)

    (reset! bounds [(.width  (.viewSize (.view js/paper)))
		    (.height (.viewSize (.view js/paper)))])


    (let [;; my-path (new (. js/paper Path))
	  ;; begn (point 100 100)
	  ;; endd (point 200 -50)
	  ;; ptxt (new (. js/paper PointText) (point 50 50))
	  ;; _tx  (set! (.fillColor ptxt) "black")
	  ;; _pa  (set! (.strokeColor my-path) "black")
	  ;; _pa  (. my-path moveTo begn)
	  ;; _pa  (. my-path lineTo (. begn add endd))


	  [w h] @bounds

	  p2   (new (. js/paper Path))
	  pts  (map (fn [a] [a 1]) (range 0 w 100))
	  _    (doseq [[x y] pts] (. p2 add (point x y)))
	  p3   (path {:stroke-color "blue"
	       	      :stroke-width 5}
	       	     (map (fn [a]
			    [a 1])
			  (range 0 800 100)))
	  _    (.log js/console p3)


	  colr (rgb .15 .3  0.5)
	  cir  (circle 0 0 15)
	  _    (fill-color cir colr)
	  sym  (make-symbol cir)
	  _    (. cir (remove))

	  c1   (doall (for [x (range 15 w 30) y (range 15 h 30)]
	       		(let [elt (. sym place (point x y))]
	       		  (set! (.fillColor elt) (rgb .15 (/ y h)  0.5))
	       		  (. elt scale (+ 0.15 (* 0.75 (. js/Math sin (+ x (* 3 y)))))))))

	  ]

      (set! (.strokeColor p2)  "blue")
      (set! (.strokeWidth p2)       9)
      ;; (set! (.selected    p2)    true)
      ;; (set! (.strokeJoin  p2) "round")
      ;; (. p2 rotate 65)
      (smooth p2)
      (set! (.visible p2) false)
      
      (set! (.strokeColor p3)   "red")
      (set! (.strokeWidth p3)       9)
      ;; (set! (.selected    p2)    true)
      ;; (set! (.strokeJoin  p2) "round")
      ;; (. p3 rotate 65)
      (smooth p3)
      (set! (.visible p3) false)
      
      
      
      (set! (. (.view js/paper) onFrame)
	    (fn
	      [event]

	      ;; (doseq [[x  ] c1]
	      ;; 	     (for [x (range 15 w 30) y (range 15 h 30)]
	      ;; 	       (let [elt (. sym place (point x y))]
	      ;; 		 ;; (set! (.fillColor elt) (rgb .15 (/ y h)  0.5))
	      ;; 		 (. elt scale (+ 0.25 (* 0.75 (. js/Math sin (+ (rand) i (* 3 y)))))))))


	      (doseq [[h s] (map-indexed (fn [i s]
					   [(. js/Math sin (+ i (* 3 (. event time)))) s])
					 (.segments p2))]
		(set! (. (. s point) y) (+ 100 (* 50 h))))


	      (doseq [[h s] (map-indexed (fn [i s]
					   [(. js/Math sin (+ i (* 3 (. event time)))) s])
					 (.segments p3))]
		(set! (. (. s point) y) (+ 200 (* 50 h))))
	      
	      ;; text stuff
	      ;; (set! (.content ptxt) (.count event))
		   
	      ;; path stuff
	      ;; (. my-path rotate (mod (.count event) 360))
							    )))))


(set! (. js/window onload) do-thing)



;; (defn draw-frame [] (. (.view js/paper) (draw)))


;; (defmacro style!
;;   "Sets the properties of a paper.js item.
;;   (style! my-circle :fill-color "black " :stroke-color "red ")
;;   => (do 
;;        (set! (.fillColor my-circle) "black ")
;;        (set! (.strokeColor my-circle) "red "))"
;;   [obj & kvs]
;;   `(do 
;;      ~@(map (fn [[k v]]
;; 	      `(set! (~(symbol (str "." (kw->js k))) ~obj) ~v))
;; 	    (partition 2 kvs))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; (ns spinners)


;; (def mousePoint (Point. [80 80]);; (.center view)
;;      )
;; (def amount 25)
;; (def colors ["red" "white" "blue" "white"])
;; (def childs (. (.children activeLayer) project))


;; ;; var mousePoint = view.center;
;; ;; var amount = 25;
;; ;; var colors = ['red', 'white', 'blue', 'white'];
;; ;; var children = project.activeLayer.children;


;; (doseq  [i (range amount)
;; 	 :let [rect (Rectangle. [0 0] [25 25])
;; 	       path (. Path RoundRectangle rect 6)]]
;;   (set! (.rect center) mousePoint)
;;   (set! (.fillColor path) (nth colors (mod i 4)))

;;   (. path scale (* 20 (/ (- 1 i) amount))))

;; ;; for (var i = 0; i < amount; i++) {
;; ;;     var rect = new Rectangle([0, 0], [25, 25]);
;; ;;     rect.center = mousePoint;
;; ;;     var path = new Path.RoundRectangle(rect, 6);
;; ;;     path.fillColor = colors[i % 4];
;; ;;     var scale = (1 - i / amount) * 20;
;; ;;     path.scale(scale);
;; ;; }


;; (defn onMouseMove [event]
;;   (set! mousePoint (.point event)))

;; ;; function onMouseMove(event) {
;; ;;     mousePoint = event.point;
;; ;; }


;; (defn onFrame [event]
;;   (doseq [i (range amount)
;; 	  :while (< i (.length childs))
;; 	  :let   [item  (aget childs i)
;; 		  delta (/ (- mousePoint (.position item)) (+ i 5))]]
;;     (. item rotate (. Math sin (* (/ (+ i (.count event)) 10) 7)))
;;     (if (> (.length delta) 0.1)
;;       (. item translate delta)))) 

;; ;; function onFrame(event) {
;; ;;     for (var i = 0, l = children.length; i < l; i++) {
;; ;;         var item = children[i];
;; ;;         var delta = (mousePoint - item.position) / (i + 5);
;; ;;         item.rotate(Math.sin((event.count + i) / 10) * 7);
;; ;;         if (delta.length > 0.1)
;; ;;             item.translate(delta);
;; ;;     }
;; ;; }