(ns grokb.views.common
  (:use noir.core
        hiccup.core
        hiccup.page-helpers))


(defpartial layout [& content]
            (html5
	     (include-js "/cljs/bootstrap.js")
	     [:head
               [:title "grokb"]

               (include-css "/css/reset.css")


	       [:script {:type "text/javascript"
			 :src  "/js/paper.js"}]

	       [:script {:type "text/paperscript"
			 :canvas "canvas0"
			 :src "/js/sperm.js"}]

	       [:script {:type "text/paperscript"
			 :canvas "canvas1"
			 :src "/js/whoa.js"}]]
              [:body
               [:div#wrapper
                content]]))


(defpartial layout-2 [& content]
            (html5
	     (include-js "/cljs/bootstrap.js")
	     [:head
               [:title "grokb"]

               (include-css "/css/reset.css")

	       [:script {:type "text/javascript"
			 :src  "/js/paper.js"}]

	       [:script {:type   "text/paperscript"
			 :canvas "canvas0"
			 :src    "/cljs/grokb/spinners.js"}]]
              [:body
               [:div#wrapper
                content]]))



	  






