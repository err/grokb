(ns grokb.server
  (:require [noir.server    :as server]
	    [noir.util.cljs :as cljs]))

(server/load-views "src/grokb/views/")
(server/add-middleware cljs/wrap-cljs)

(defn -main [& m]
  (let [mode (keyword (or (first m) :dev))
        port (Integer. (get (System/getenv) "PORT" "8080"))]
    (server/start port {:mode mode
                        :ns 'grokb})))


(defn start-server []
  (let [port (Integer. (get (System/getenv) "PORT" "8080"))]
    (server/start port {:mode :dev
			:ns 'grokb})))










