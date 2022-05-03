(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{470:function(e,t,s){"use strict";s.r(t);var i=s(62),r=Object(i.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"stop-words-setting-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stop-words-setting-api"}},[e._v("#")]),e._v(" Stop Words Setting API")]),e._v(" "),s("h2",{attrs:{id:"_1-summary"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-summary"}},[e._v("#")]),e._v(" 1. Summary")]),e._v(" "),s("p",[e._v("This specification describes the "),s("code",[e._v("stopWords")]),e._v(" index setting API endpoints.")]),e._v(" "),s("h2",{attrs:{id:"_2-motivation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-motivation"}},[e._v("#")]),e._v(" 2. Motivation")]),e._v(" "),s("p",[e._v("N/A")]),e._v(" "),s("h2",{attrs:{id:"_3-functional-specification"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-functional-specification"}},[e._v("#")]),e._v(" 3. Functional Specification")]),e._v(" "),s("h3",{attrs:{id:"_3-1-explanations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-explanations"}},[e._v("#")]),e._v(" 3.1. Explanations")]),e._v(" "),s("p",[e._v("The "),s("code",[e._v("stopWords")]),e._v(" index setting allows the configuration of a list of words to be ignored in search queries. The stop words contained in a search query will be ignored by the engine when matching and ranking search results.")]),e._v(" "),s("h4",{attrs:{id:"_3-1-1-usage-example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-1-usage-example"}},[e._v("#")]),e._v(" 3.1.1. Usage Example")]),e._v(" "),s("p",[e._v("Suppose a database contains articles written in English. Countless occurrences of "),s("code",[e._v("the")]),e._v(" and "),s("code",[e._v("of")]),e._v(" could deteriorate the relevancy of search results. To set "),s("code",[e._v("the")]),e._v(" and "),s("code",[e._v("of")]),e._v(" words as stop words, it can be specified the following way.")]),e._v(" "),s("p",[s("em",[s("strong",[e._v("Request payload "),s("code",[e._v("POST")]),e._v("- "),s("code",[e._v("/indexes/articles/settings/stop-words")])])])]),e._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"the"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"of"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])])]),s("p",[e._v("By adding common English words such as "),s("code",[e._v("the")]),e._v(" or "),s("code",[e._v("of")]),e._v(" to the stop-words list, Meilisearch will not take them into consideration when calculating how relevant a result is.")]),e._v(" "),s("h3",{attrs:{id:"_3-2-global-settings-api-endpoints-definition"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-global-settings-api-endpoints-definition"}},[e._v("#")]),e._v(" 3.2. Global Settings API Endpoints Definition")]),e._v(" "),s("p",[s("code",[e._v("stopWords")]),e._v(" is a sub-resource of "),s("code",[e._v("/indexes/:index_uid/settings")]),e._v(".")]),e._v(" "),s("p",[e._v("See "),s("RouterLink",{attrs:{to:"/specifications/text/0123-settings-api.html"}},[e._v("Settings API")]),e._v(".")],1),e._v(" "),s("h3",{attrs:{id:"_3-3-api-endpoints-definition"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-api-endpoints-definition"}},[e._v("#")]),e._v(" 3.3. API Endpoints Definition")]),e._v(" "),s("p",[e._v("Manipulate the "),s("code",[e._v("stopWords")]),e._v(" setting of a Meilisearch index.")]),e._v(" "),s("h4",{attrs:{id:"_3-3-1-get-indexes-index-uid-settings-stop-words"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-1-get-indexes-index-uid-settings-stop-words"}},[e._v("#")]),e._v(" 3.3.1. "),s("code",[e._v("GET")]),e._v(" - "),s("code",[e._v("indexes/:index_uid/settings/stop-words")])]),e._v(" "),s("p",[e._v("Fetch the "),s("code",[e._v("stopWords")]),e._v(" setting of a Meilisearch index.")]),e._v(" "),s("h5",{attrs:{id:"_3-3-1-1-response-definition"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-1-1-response-definition"}},[e._v("#")]),e._v(" 3.3.1.1. Response Definition")]),e._v(" "),s("ul",[s("li",[e._v("Type: Array of String")]),e._v(" "),s("li",[e._v("Default: "),s("code",[e._v("[]")])])]),e._v(" "),s("h5",{attrs:{id:"_3-3-1-2-errors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-1-2-errors"}},[e._v("#")]),e._v(" 3.3.1.2. Errors")]),e._v(" "),s("ul",[s("li",[e._v("🔴 If the requested "),s("code",[e._v("index_uid")]),e._v(" does not exist, the API returns an "),s("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#index_not_found"}},[e._v("index_not_found")]),e._v(" error.")],1)]),e._v(" "),s("h4",{attrs:{id:"_3-3-2-post-indexes-index-uid-settings-stop-words"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-2-post-indexes-index-uid-settings-stop-words"}},[e._v("#")]),e._v(" 3.3.2. "),s("code",[e._v("POST")]),e._v(" - "),s("code",[e._v("indexes/:index_uid/settings/stop-words")])]),e._v(" "),s("p",[e._v("Modify the "),s("code",[e._v("stopWords")]),e._v(" setting of a Meilisearch index.")]),e._v(" "),s("h5",{attrs:{id:"_3-3-2-1-request-payload-definition"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-2-1-request-payload-definition"}},[e._v("#")]),e._v(" 3.3.2.1. Request Payload Definition")]),e._v(" "),s("ul",[s("li",[e._v("Type: Array of String / "),s("code",[e._v("null")])])]),e._v(" "),s("p",[e._v("Setting "),s("code",[e._v("null")]),e._v(" is equivalent to using the "),s("a",{attrs:{href:"#333-delete---indexesindexuidsettingsstop-words"}},[e._v("3.3.3. "),s("code",[e._v("DELETE")]),e._v(" - "),s("code",[e._v("indexes/:index_uid/settings/stop-words")])]),e._v(" API endpoint.")]),e._v(" "),s("h5",{attrs:{id:"_3-3-2-2-response-definition"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-2-2-response-definition"}},[e._v("#")]),e._v(" 3.3.2.2. Response Definition")]),e._v(" "),s("p",[e._v("When the request is successful, Meilisearch returns the HTTP code "),s("code",[e._v("202 Accepted")]),e._v(". The response's content is the summarized representation of the received asynchronous task.")]),e._v(" "),s("p",[e._v("See "),s("RouterLink",{attrs:{to:"/specifications/text/0060-tasks-api.html#summarized-task-object-for-202-accepted"}},[e._v("Summarized "),s("code",[e._v("task")]),e._v(" Object for "),s("code",[e._v("202 Accepted")])]),e._v(".")],1),e._v(" "),s("h5",{attrs:{id:"_3-3-2-3-errors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-2-3-errors"}},[e._v("#")]),e._v(" 3.3.2.3. Errors")]),e._v(" "),s("ul",[s("li",[e._v("🔴 Omitting Content-Type header returns a "),s("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#missing_content_type"}},[e._v("missing_content_type")]),e._v(" error.")],1),e._v(" "),s("li",[e._v("🔴 Sending an empty Content-Type returns an "),s("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#invalid_content_type"}},[e._v("invalid_content_type")]),e._v(" error.")],1),e._v(" "),s("li",[e._v("🔴 Sending a different Content-Type than "),s("code",[e._v("application/json")]),e._v(" returns an "),s("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#invalid_content_type"}},[e._v("invalid_content_type")]),e._v(" error.")],1),e._v(" "),s("li",[e._v("🔴 Sending an empty payload returns a "),s("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#missing_payload"}},[e._v("missing_payload")]),e._v(" error.")],1),e._v(" "),s("li",[e._v("🔴 Sending an invalid JSON payload returns a "),s("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#malformed_payload"}},[e._v("malformed_payload")]),e._v(" error.")],1),e._v(" "),s("li",[e._v("🔴 Sending a request payload value type different of "),s("code",[e._v("Array of String")]),e._v(", "),s("code",[e._v("[]")]),e._v(",  or "),s("code",[e._v("null")]),e._v(" returns a "),s("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#bad_request"}},[e._v("bad_request")]),e._v(" error.")],1)]),e._v(" "),s("h6",{attrs:{id:"_3-3-2-3-1-async-errors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-2-3-1-async-errors"}},[e._v("#")]),e._v(" 3.3.2.3.1. Async Errors")]),e._v(" "),s("ul",[s("li",[e._v("🔴 When Meilisearch is secured, if the API Key do not have the "),s("code",[e._v("indexes.create")]),e._v(" action defined, the API returns an "),s("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#index_not_found"}},[e._v("index_not_found")]),e._v(" error in the related asynchronous "),s("code",[e._v("task")]),e._v(" resource. See "),s("a",{attrs:{href:"#3222-response-definition"}},[e._v("3.3.2.2. Response Definition")]),e._v(".")],1)]),e._v(" "),s("blockquote",[s("p",[e._v("Otherwise, Meilisearch will create the index in a lazy way. See "),s("a",{attrs:{href:"#3224-lazy-index-creation"}},[e._v("3.2.2.4. Lazy Index Creation")]),e._v(".")])]),e._v(" "),s("h5",{attrs:{id:"_3-3-2-4-lazy-index-creation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-2-4-lazy-index-creation"}},[e._v("#")]),e._v(" 3.3.2.4. Lazy Index Creation")]),e._v(" "),s("p",[e._v("If the requested "),s("code",[e._v("index_uid")]),e._v(" does not exist, and the authorization layer allows it (See "),s("a",{attrs:{href:"#33231-async-errors"}},[e._v("3.3.2.3.1. Async Errors")]),e._v("), Meilisearch will create the index when the related asynchronous task resource is executed. See "),s("a",{attrs:{href:"#3322-response-definition"}},[e._v("3.3.2.2. Response Definition")]),e._v(".")]),e._v(" "),s("h4",{attrs:{id:"_3-3-3-delete-indexes-index-uid-settings-stop-words"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-3-delete-indexes-index-uid-settings-stop-words"}},[e._v("#")]),e._v(" 3.3.3. "),s("code",[e._v("DELETE")]),e._v(" - "),s("code",[e._v("indexes/:index_uid/settings/stop-words")])]),e._v(" "),s("p",[e._v("Reset the "),s("code",[e._v("stopWords")]),e._v(" setting of a Meilisearch index to the default value "),s("code",[e._v("[]")]),e._v(".")]),e._v(" "),s("h5",{attrs:{id:"_3-3-3-1-response-definition"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-3-1-response-definition"}},[e._v("#")]),e._v(" 3.3.3.1. Response Definition")]),e._v(" "),s("p",[e._v("When the request is in a successful state, Meilisearch returns the HTTP code "),s("code",[e._v("202 Accepted")]),e._v(". The response's content is the summarized representation of the received asynchronous task.")]),e._v(" "),s("p",[e._v("See "),s("RouterLink",{attrs:{to:"/specifications/text/0060-tasks-api.html#summarized-task-object-for-202-accepted"}},[e._v("Summarized "),s("code",[e._v("task")]),e._v(" Object for "),s("code",[e._v("202 Accepted")])]),e._v(".")],1),e._v(" "),s("h5",{attrs:{id:"_3-3-3-3-errors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-3-3-errors"}},[e._v("#")]),e._v(" 3.3.3.3. Errors")]),e._v(" "),s("h6",{attrs:{id:"_3-3-3-3-1-asynchronous-index-not-found-error"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-3-3-1-asynchronous-index-not-found-error"}},[e._v("#")]),e._v(" 3.3.3.3.1. Asynchronous Index Not Found Error")]),e._v(" "),s("ul",[s("li",[e._v("🔴 If the requested "),s("code",[e._v("index_uid")]),e._v(" does not exist, the API returns an "),s("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#index_not_found"}},[e._v("index_not_found")]),e._v(" error in the related async "),s("code",[e._v("task")]),e._v(" resource. See "),s("a",{attrs:{href:"#3331-response-definition"}},[e._v("3.3.3.1. Response Definition")]),e._v(".")],1)]),e._v(" "),s("h4",{attrs:{id:"_3-3-4-general-errors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-4-general-errors"}},[e._v("#")]),e._v(" 3.3.4. General Errors")]),e._v(" "),s("p",[e._v("These errors apply to all endpoints described here.")]),e._v(" "),s("h5",{attrs:{id:"_3-3-4-1-auth-errors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-4-1-auth-errors"}},[e._v("#")]),e._v(" 3.3.4.1 Auth Errors")]),e._v(" "),s("p",[e._v("The auth layer can return the following errors if Meilisearch is secured (a master-key is defined).")]),e._v(" "),s("ul",[s("li",[e._v("🔴 Accessing this route without the "),s("code",[e._v("Authorization")]),e._v(" header returns a "),s("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#missing_authorization_header"}},[e._v("missing_authorization_header")]),e._v(" error.")],1),e._v(" "),s("li",[e._v("🔴 Accessing this route with a key that does not have permissions (i.e. other than the master-key) returns an "),s("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#invalid_api_key"}},[e._v("invalid_api_key")]),e._v(" error.")],1)]),e._v(" "),s("h2",{attrs:{id:"_4-technical-details"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-technical-details"}},[e._v("#")]),e._v(" 4. Technical Details")]),e._v(" "),s("h3",{attrs:{id:"_4-1-triggering-documents-re-indexing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-triggering-documents-re-indexing"}},[e._v("#")]),e._v(" 4.1. Triggering Documents Re-Indexing")]),e._v(" "),s("p",[e._v("Meilisearch favors search speed and makes a trade-off on indexing speed by computing internal data structures to get search results as fast as possible.")]),e._v(" "),s("p",[e._v("Modifying this index setting cause documents to be re-indexed.")]),e._v(" "),s("h2",{attrs:{id:"_5-future-possibilities"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-future-possibilities"}},[e._v("#")]),e._v(" 5. Future Possibilities")]),e._v(" "),s("ul",[s("li",[e._v("Replace "),s("code",[e._v("POST")]),e._v(" HTTP verb with "),s("code",[e._v("PATCH")])]),e._v(" "),s("li",[e._v("Add dedicated error to avoid using generic "),s("code",[e._v("bad_request")]),e._v(" error code")])])])}),[],!1,null,null,null);t.default=r.exports}}]);