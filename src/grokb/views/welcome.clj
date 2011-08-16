(ns grokb.views.welcome
  (:require [grokb.views.common :as common]
            [noir.content.pages :as pages])
  (:use noir.core
        hiccup.core
        hiccup.page-helpers))

(defpage welcome [:get "/welcome"] {}
         (common/layout
           [:p "Welcome to grokb"]
	   [:canvas#canvas0 {:width 640
			     :height 480}]
	   [:canvas#canvas1 {:width 640
			     :height 480}]))

(defpage foo [:get "/foo"] {}
         (common/layout-2
	  [:p "Welcome to grokb FOO"]
	  [:canvas#canvas0 {:width 640 :heigh 480}]))
