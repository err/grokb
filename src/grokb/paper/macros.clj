(ns grokb.paper.macros)

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