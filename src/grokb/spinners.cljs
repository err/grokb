(ns spinners
  (:require [goog.dom :as dom]))

(defn get-element
  "Return the element with the passed id."
  [id]
  (dom/getElement (name id)))

(let [canvas (get-element "canvas0")]
  (. goog.global.paper setup canvas)
  (let [path (. goog.global.paper (Path))
	begn (. goog.global.paper Point 100 100)]
    (set! (.strokeColor path) "black")
    (. path moveTo begn)
    (. path lineT0 (. start add [200 -50]))
    (. (.view goog.global.paper) (draw))))


    ;; window.onload = function() {

    ;; 	;; Get a reference to the canvas object
    ;;     var canvas = document.getElementById('myCanvas');

    ;;  ;;   // Create an empty project and a view for the canvas:
    ;;     paper.setup(canvas);

    ;;  ;;   // Create a Paper.js Path to draw a line into it:
    ;;     var path = new paper.Path();

    ;;  ;;   // Give the stroke a color
    ;;     path.strokeColor = 'black';
    ;;     var start = new paper.Point(100, 100);

    ;;  ;;   // Move to start and draw a line from there
    ;;     path.moveTo(start);

    ;;  ;;   // Note that the plus operator on Point objects does not work
    ;;  ;;   // in JavaScript. Instead, we need to call the add() function:
    ;;     path.lineTo(start.add([ 200, -50 ]));

    ;;  ;;   // Draw the view now:
    ;;     paper.view.draw();

    ;; }



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