(ns grokb.views.welcome
  (:require [grokb.views.common :as common]
            [noir.content.pages :as pages])
  (:use noir.core
        hiccup.core
        hiccup.page-helpers))

(defpage welcome
  [:get "/welcome"] {}
  (common/layout
   [:p "Welcome to grokb"]
   [:canvas#canvas0 {:width 640
		     :height 480}]
   [:canvas#canvas1 {:width 640
		     :height 480}]))

(defpartial layout-foo [& content]
            (html5
	     (include-js "/cljs/bootstrap.js")
	     [:head
               [:title "grokb"]
	      
	      ;; (include-css "/css/reset.css")

	       [:script {:type "text/javascript"
			 :src  "/js/paper.js"}]

	       [:script {:type   "text/javascript"
			 :canvas "canvas0"
			 :src    "/cljs/grokb/spinners.js"}]]
              [:body
               [:div#wrapper
                content]]))

(defpage foo
  [:get "/foo"] {}
  (layout-foo
   [:p "Welcome to grokb FOO"]
   [:canvas#canvas0 {:width 640 :height 480 :resize "true"}]))


(defpartial layout-raph [& content]
  (html5
   (include-js "/cljs/bootstrap.js")
   [:head
    [:title "grokb"]
    (include-css "/css/reset.css")

    [:script {:type "text/javascript"
	      :src  "/js/raphael.js"}]]
   [:body
    [:div#wrapper
     content]]))

(defpage raph
  [:get "/raph"] {}
  (layout-raph
   [:p "Welcome to raphael, bitch!"]
   [:script {:type "text/javascript"
	     :src  "/cljs/grokb/raph.js"}]))
