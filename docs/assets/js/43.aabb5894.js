(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{467:function(e,t,a){"use strict";a.r(t);var s=a(62),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"searchable-attributes-setting-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#searchable-attributes-setting-api"}},[e._v("#")]),e._v(" Searchable Attributes Setting API")]),e._v(" "),a("h2",{attrs:{id:"_1-summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-summary"}},[e._v("#")]),e._v(" 1. Summary")]),e._v(" "),a("p",[e._v("This specification describes the "),a("code",[e._v("searchableAttributes")]),e._v(" index setting API endpoints.")]),e._v(" "),a("h2",{attrs:{id:"_2-motivation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-motivation"}},[e._v("#")]),e._v(" 2. Motivation")]),e._v(" "),a("p",[e._v("N/A")]),e._v(" "),a("h2",{attrs:{id:"_3-functional-specification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-functional-specification"}},[e._v("#")]),e._v(" 3. Functional Specification")]),e._v(" "),a("h3",{attrs:{id:"_3-1-explanations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-explanations"}},[e._v("#")]),e._v(" 3.1. Explanations")]),e._v(" "),a("p",[e._v("Documents in Meilisearch are composed of multiple fields. A field can either be searchable or non-searchable.")]),e._v(" "),a("p",[e._v("When a search query is performed, all searchable fields are checked for matching query words and used to assess document relevancy, while non-searchable fields are ignored entirely.")]),e._v(" "),a("p",[e._v("By default, Meilisearch looks for matches in every field, but the "),a("code",[e._v("searchableAttributes")]),e._v(" setting object allow to customize that behavior.")]),e._v(" "),a("h4",{attrs:{id:"_3-1-1-usage-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-1-usage-example"}},[e._v("#")]),e._v(" 3.1.1. Usage Example")]),e._v(" "),a("p",[e._v("Suppose a database of movies with the following fields: "),a("code",[e._v("id")]),e._v(", "),a("code",[e._v("overview")]),e._v(", "),a("code",[e._v("genres")]),e._v(", "),a("code",[e._v("title")]),e._v(", "),a("code",[e._v("release_date")]),e._v(". These fields all contain useful information; however, some are more useful to search than others. To make the "),a("code",[e._v("id")]),e._v(" and "),a("code",[e._v("release_date")]),e._v(" fields non-searchable and re-order the remaining fields by importance, it can be specified in the following way.")]),e._v(" "),a("p",[a("em",[a("strong",[e._v("Request payload "),a("code",[e._v("POST")]),e._v("- "),a("code",[e._v("/indexes/movies/settings/searchable-attributes")])])])]),e._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"overview"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"genres"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"title"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])])]),a("h4",{attrs:{id:"_3-1-2-field-ordering"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-2-field-ordering"}},[e._v("#")]),e._v(" 3.1.2. Field Ordering")]),e._v(" "),a("p",[e._v("Meilisearch uses an ordered list to determine which attributes are searchable. The order in which attributes appear in this list also determines their impact on relevancy, from most impactful to least.")]),e._v(" "),a("p",[e._v("In other words, the "),a("code",[e._v("searchableAttributes")]),e._v(" setting serves two purposes:")]),e._v(" "),a("ul",[a("li",[e._v("It designates the fields that are searchable.")]),e._v(" "),a("li",[e._v("It dictates the attribute ranking order.")])]),e._v(" "),a("p",[e._v("There are two possible modes for the "),a("code",[e._v("searchableAttributes")]),e._v(" setting.")]),e._v(" "),a("h5",{attrs:{id:"_3-1-1-1-default-case-automatic"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-1-1-default-case-automatic"}},[e._v("#")]),e._v(" 3.1.1.1. Default case: Automatic")]),e._v(" "),a("p",[e._v("By default, all attributes are automatically added to the "),a("code",[e._v("searchableAttributes")]),e._v(" list in their order of appearance.")]),e._v(" "),a("p",[e._v("This means that the initial order will be based on the order of attributes in the first document indexed, with each new attribute found in subsequent documents added at the end of this list.")]),e._v(" "),a("p",[e._v("This default behavior is indicated by a "),a("code",[e._v("searchableAttributes")]),e._v(" value of "),a("code",[e._v('["*"]')]),e._v(".")]),e._v(" "),a("h5",{attrs:{id:"_3-1-1-2-manual"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-1-2-manual"}},[e._v("#")]),e._v(" 3.1.1.2. Manual")]),e._v(" "),a("p",[e._v("To make some attributes non-searchable, or change the attribute ranking order. Attributes must be described from most important to least important.")]),e._v(" "),a("p",[a("em",[a("strong",[e._v("Request payload "),a("code",[e._v("POST")]),e._v("- "),a("code",[e._v("/indexes/movies/settings/searchable-attributes")])])])]),e._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"title"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"overview"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"genres"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])])]),a("p",[a("code",[e._v("title")]),e._v(" is considered more important than "),a("code",[e._v("overview")]),e._v(" while "),a("code",[e._v("overview")]),e._v(" is considered more important than "),a("code",[e._v("genres")]),e._v(".")]),e._v(" "),a("p",[e._v("The "),a("a",{attrs:{href:""}},[e._v("Attribute Ranking Rule")]),e._v(" ranks search results by the order defined in the "),a("code",[e._v("searchableAttributes")]),e._v(" setting. Documents that contain query terms in the more important searchable attribute will be returned first.")]),e._v(" "),a("p",[e._v("Manually updating "),a("code",[e._v("searchableAttributes")]),e._v(" will change the displayed order of document fields in the JSON response.")]),e._v(" "),a("h4",{attrs:{id:"_3-1-3-relationship-with-ranking-rules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-3-relationship-with-ranking-rules"}},[e._v("#")]),e._v(" 3.1.3. Relationship With Ranking Rules")]),e._v(" "),a("p",[e._v("A document field that is not defined in the list of "),a("code",[e._v("searchableAttributes")]),e._v(" will not be considered by the following ranking rules to match and rank search results.")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:""}},[e._v("Words")])]),e._v(" "),a("li",[a("a",{attrs:{href:""}},[e._v("Typo")])]),e._v(" "),a("li",[a("a",{attrs:{href:""}},[e._v("Proximity")])]),e._v(" "),a("li",[a("a",{attrs:{href:""}},[e._v("Attribute")])]),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/specifications/text/0036-exactness-criterion.html"}},[e._v("Exactness")])],1)]),e._v(" "),a("h3",{attrs:{id:"_3-2-global-settings-api-endpoints-definition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-global-settings-api-endpoints-definition"}},[e._v("#")]),e._v(" 3.2. Global Settings API Endpoints Definition")]),e._v(" "),a("p",[a("code",[e._v("searchableAttributes")]),e._v(" is a sub-resource of "),a("code",[e._v("/indexes/:index_uid/settings")]),e._v(".")]),e._v(" "),a("p",[e._v("See "),a("RouterLink",{attrs:{to:"/specifications/text/0123-settings-api.html"}},[e._v("Settings API")]),e._v(".")],1),e._v(" "),a("h3",{attrs:{id:"_3-3-api-endpoints-definition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-api-endpoints-definition"}},[e._v("#")]),e._v(" 3.3. API Endpoints Definition")]),e._v(" "),a("p",[e._v("Manipulate the "),a("code",[e._v("searchableAttributes")]),e._v(" setting of a Meilisearch index.")]),e._v(" "),a("h4",{attrs:{id:"_3-3-1-get-indexes-index-uid-settings-searchable-attributes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-1-get-indexes-index-uid-settings-searchable-attributes"}},[e._v("#")]),e._v(" 3.3.1. "),a("code",[e._v("GET")]),e._v(" - "),a("code",[e._v("indexes/:index_uid/settings/searchable-attributes")])]),e._v(" "),a("p",[e._v("Fetch the "),a("code",[e._v("searchableAttributes")]),e._v(" setting of a Meilisearch index.")]),e._v(" "),a("h5",{attrs:{id:"_3-3-1-1-response-definition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-1-1-response-definition"}},[e._v("#")]),e._v(" 3.3.1.1. Response Definition")]),e._v(" "),a("ul",[a("li",[e._v("Type: Array of String")]),e._v(" "),a("li",[e._v("Default: "),a("code",[e._v('["*"]')])])]),e._v(" "),a("h5",{attrs:{id:"_3-3-1-2-errors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-1-2-errors"}},[e._v("#")]),e._v(" 3.3.1.2. Errors")]),e._v(" "),a("ul",[a("li",[e._v("🔴 If the requested "),a("code",[e._v("index_uid")]),e._v(" does not exist, the API returns an "),a("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#index_not_found"}},[e._v("index_not_found")]),e._v(" error.")],1)]),e._v(" "),a("h4",{attrs:{id:"_3-3-2-post-indexes-index-uid-settings-searchable-attributes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-2-post-indexes-index-uid-settings-searchable-attributes"}},[e._v("#")]),e._v(" 3.3.2. "),a("code",[e._v("POST")]),e._v(" - "),a("code",[e._v("indexes/:index_uid/settings/searchable-attributes")])]),e._v(" "),a("p",[e._v("Modify the "),a("code",[e._v("searchableAttributes")]),e._v(" setting of a Meilisearch index.")]),e._v(" "),a("h5",{attrs:{id:"_3-3-2-1-request-payload-definition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-2-1-request-payload-definition"}},[e._v("#")]),e._v(" 3.3.2.1. Request Payload Definition")]),e._v(" "),a("ul",[a("li",[e._v("Type: Array of String / "),a("code",[e._v("null")])])]),e._v(" "),a("p",[e._v("Setting "),a("code",[e._v("null")]),e._v(" is equivalent to using the "),a("a",{attrs:{href:"#333-delete---indexesindexuidsettingssearchable-attributes"}},[e._v("3.3.3. "),a("code",[e._v("DELETE")]),e._v(" - "),a("code",[e._v("indexes/:index_uid/settings/searchable-attributes")])]),e._v(" API endpoint.")]),e._v(" "),a("p",[e._v("Specifying a document attribute that does not exist as a "),a("code",[e._v("searchableAttributes")]),e._v(" index setting returns no error.")]),e._v(" "),a("p",[e._v("Specifying "),a("code",[e._v("[]")]),e._v(" for the "),a("code",[e._v("searchableAttributes")]),e._v(" index setting allows to specify that all fields are non-searchable.")]),e._v(" "),a("h5",{attrs:{id:"_3-3-2-2-response-definition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-2-2-response-definition"}},[e._v("#")]),e._v(" 3.3.2.2. Response Definition")]),e._v(" "),a("p",[e._v("When the request is successful, Meilisearch returns the HTTP code "),a("code",[e._v("202 Accepted")]),e._v(". The response's content is the summarized representation of the received asynchronous task.")]),e._v(" "),a("p",[e._v("See "),a("RouterLink",{attrs:{to:"/specifications/text/0060-tasks-api.html#summarized-task-object-for-202-accepted"}},[e._v("Summarized "),a("code",[e._v("task")]),e._v(" Object for "),a("code",[e._v("202 Accepted")])]),e._v(".")],1),e._v(" "),a("h5",{attrs:{id:"_3-3-2-3-errors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-2-3-errors"}},[e._v("#")]),e._v(" 3.3.2.3. Errors")]),e._v(" "),a("ul",[a("li",[e._v("🔴 Omitting Content-Type header returns a "),a("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#missing_content_type"}},[e._v("missing_content_type")]),e._v(" error.")],1),e._v(" "),a("li",[e._v("🔴 Sending an empty Content-Type returns an "),a("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#invalid_content_type"}},[e._v("invalid_content_type")]),e._v(" error.")],1),e._v(" "),a("li",[e._v("🔴 Sending a different Content-Type than "),a("code",[e._v("application/json")]),e._v(" returns an "),a("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#invalid_content_type"}},[e._v("invalid_content_type")]),e._v(" error.")],1),e._v(" "),a("li",[e._v("🔴 Sending an empty payload returns a "),a("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#missing_payload"}},[e._v("missing_payload")]),e._v(" error.")],1),e._v(" "),a("li",[e._v("🔴 Sending an invalid JSON payload returns a "),a("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#malformed_payload"}},[e._v("malformed_payload")]),e._v(" error.")],1),e._v(" "),a("li",[e._v("🔴 Sending a request payload value type different of "),a("code",[e._v("Array of String")]),e._v(", "),a("code",[e._v("[]")]),e._v(" or "),a("code",[e._v("null")]),e._v(" returns a "),a("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#bad_request"}},[e._v("bad_request")]),e._v(" error.")],1)]),e._v(" "),a("h6",{attrs:{id:"_3-3-2-3-1-async-errors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-2-3-1-async-errors"}},[e._v("#")]),e._v(" 3.3.2.3.1. Async Errors")]),e._v(" "),a("ul",[a("li",[e._v("🔴 When Meilisearch is secured, if the API Key do not have the "),a("code",[e._v("indexes.create")]),e._v(" action defined, the API returns an "),a("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#index_not_found"}},[e._v("index_not_found")]),e._v(" error in the related asynchronous "),a("code",[e._v("task")]),e._v(" resource. See "),a("a",{attrs:{href:"#3222-response-definition"}},[e._v("3.3.2.2. Response Definition")]),e._v(".")],1)]),e._v(" "),a("blockquote",[a("p",[e._v("Otherwise, Meilisearch will create the index in a lazy way. See "),a("a",{attrs:{href:"#3224-lazy-index-creation"}},[e._v("3.2.2.4. Lazy Index Creation")]),e._v(".")])]),e._v(" "),a("h5",{attrs:{id:"_3-3-2-4-lazy-index-creation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-2-4-lazy-index-creation"}},[e._v("#")]),e._v(" 3.3.2.4. Lazy Index Creation")]),e._v(" "),a("p",[e._v("If the requested "),a("code",[e._v("index_uid")]),e._v(" does not exist, and the authorization layer allows it (See "),a("a",{attrs:{href:"#33231-async-errors"}},[e._v("3.3.2.3.1. Async Errors")]),e._v("), Meilisearch will create the index when the related asynchronous task resource is executed. See "),a("a",{attrs:{href:"#3322-response-definition"}},[e._v("3.3.2.2. Response Definition")]),e._v(".")]),e._v(" "),a("h4",{attrs:{id:"_3-3-3-delete-indexes-index-uid-settings-searchable-attributes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-3-delete-indexes-index-uid-settings-searchable-attributes"}},[e._v("#")]),e._v(" 3.3.3. "),a("code",[e._v("DELETE")]),e._v(" - "),a("code",[e._v("indexes/:index_uid/settings/searchable-attributes")])]),e._v(" "),a("p",[e._v("Reset the "),a("code",[e._v("searchableAttributes")]),e._v(" setting of a Meilisearch index to the default value "),a("code",[e._v('["*"]')]),e._v(".")]),e._v(" "),a("h5",{attrs:{id:"_3-3-3-1-response-definition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-3-1-response-definition"}},[e._v("#")]),e._v(" 3.3.3.1. Response Definition")]),e._v(" "),a("p",[e._v("When the request is in a successful state, Meilisearch returns the HTTP code "),a("code",[e._v("202 Accepted")]),e._v(". The response's content is the summarized representation of the received asynchronous task.")]),e._v(" "),a("p",[e._v("See "),a("RouterLink",{attrs:{to:"/specifications/text/0060-tasks-api.html#summarized-task-object-for-202-accepted"}},[e._v("Summarized "),a("code",[e._v("task")]),e._v(" Object for "),a("code",[e._v("202 Accepted")])]),e._v(".")],1),e._v(" "),a("h5",{attrs:{id:"_3-3-3-3-errors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-3-3-errors"}},[e._v("#")]),e._v(" 3.3.3.3. Errors")]),e._v(" "),a("h6",{attrs:{id:"_3-3-3-3-1-asynchronous-index-not-found-error"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-3-3-1-asynchronous-index-not-found-error"}},[e._v("#")]),e._v(" 3.3.3.3.1. Asynchronous Index Not Found Error")]),e._v(" "),a("ul",[a("li",[e._v("🔴 If the requested "),a("code",[e._v("index_uid")]),e._v(" does not exist, the API returns an "),a("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#index_not_found"}},[e._v("index_not_found")]),e._v(" error in the related async "),a("code",[e._v("task")]),e._v(" resource. See "),a("a",{attrs:{href:"#3331-response-definition"}},[e._v("3.3.3.1. Response Definition")]),e._v(".")],1)]),e._v(" "),a("h4",{attrs:{id:"_3-3-4-general-errors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-4-general-errors"}},[e._v("#")]),e._v(" 3.3.4. General Errors")]),e._v(" "),a("p",[e._v("These errors apply to all endpoints described here.")]),e._v(" "),a("h5",{attrs:{id:"_3-3-4-1-auth-errors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-4-1-auth-errors"}},[e._v("#")]),e._v(" 3.3.4.1 Auth Errors")]),e._v(" "),a("p",[e._v("The auth layer can return the following errors if Meilisearch is secured (a master-key is defined).")]),e._v(" "),a("ul",[a("li",[e._v("🔴 Accessing this route without the "),a("code",[e._v("Authorization")]),e._v(" header returns a "),a("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#missing_authorization_header"}},[e._v("missing_authorization_header")]),e._v(" error.")],1),e._v(" "),a("li",[e._v("🔴 Accessing this route with a key that does not have permissions (i.e. other than the master-key) returns an "),a("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#invalid_api_key"}},[e._v("invalid_api_key")]),e._v(" error.")],1)]),e._v(" "),a("h2",{attrs:{id:"_4-technical-details"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-technical-details"}},[e._v("#")]),e._v(" 4. Technical Details")]),e._v(" "),a("h3",{attrs:{id:"_4-1-triggering-documents-re-indexing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-triggering-documents-re-indexing"}},[e._v("#")]),e._v(" 4.1. Triggering Documents Re-Indexing")]),e._v(" "),a("p",[e._v("Meilisearch favors search speed and makes a trade-off on indexing speed by computing internal data structures to get search results as fast as possible.")]),e._v(" "),a("p",[e._v("Modifying this index setting cause documents to be re-indexed.")]),e._v(" "),a("h2",{attrs:{id:"_5-future-possibilities"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-future-possibilities"}},[e._v("#")]),e._v(" 5. Future Possibilities")]),e._v(" "),a("ul",[a("li",[e._v("Replace "),a("code",[e._v("POST")]),e._v(" HTTP verb with "),a("code",[e._v("PATCH")])]),e._v(" "),a("li",[e._v("Add dedicated error to avoid using generic "),a("code",[e._v("bad_request")]),e._v(" error code")]),e._v(" "),a("li",[e._v("Return an error when "),a("code",[e._v("searchableAttributes")]),e._v(" is defined as an empty array")]),e._v(" "),a("li",[e._v("Fix the reordering issue of document representation when "),a("code",[e._v("searchableAttributes")]),e._v(" is specified.")])])])}),[],!1,null,null,null);t.default=r.exports}}]);