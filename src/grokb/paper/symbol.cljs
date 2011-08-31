(ns grokb.paper.symbol)

;; usage:

;; new symbol
;; ;;remove path

;; elt = symbol.place

;; elt.pos    = random-point
;; elt.rotate = random-angle
;; elt.scale  = random-scale


;; (defn symbol
;;   "creates a new Symbol.
;;    http://paperjs.org/reference/symbol"
;;   [path] (new (. js/paper Symbol) path))



;; var path = new Path.Star(new Point(0, 0), 6, 5, 13);
;; path.style = {
;;     fillColor: 'white',
;;     strokeColor: 'black'
;; };

;; ;// Create a symbol from the path:
;; var symbol = new Symbol(path);

;; ;// Remove the path:
;; path.remove();

;; ;// Place 100 instances of the symbol:
;; for (var i = 0; i < 100; i++) {
;;     ;// Place an instance of the symbol in the project:
;;     var instance = symbol.place();

;;     ;// Move the instance to a random position within the view:
;;     instance.position = Point.random() * view.size;

;;     ;// Rotate the instance by a random amount between
;;     ;// 0 and 360 degrees:
;;     instance.rotate(Math.random() * 360);

;;     ;// Scale the instance between 0.25 and 1:
;;     instance.scale(0.25 + Math.random() * 0.75);
;; }


