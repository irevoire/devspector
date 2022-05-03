(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{473:function(e,t,i){"use strict";i.r(t);var r=i(62),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"indexes-api"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#indexes-api"}},[e._v("#")]),e._v(" Indexes API")]),e._v(" "),i("h2",{attrs:{id:"_1-summary"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_1-summary"}},[e._v("#")]),e._v(" 1. Summary")]),e._v(" "),i("p",[e._v("This specification describes the indexes API endpoints. The endpoint gives the possibility to get, get all, create, update and delete Meilsearch indexes.")]),e._v(" "),i("h2",{attrs:{id:"_2-motivation"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_2-motivation"}},[e._v("#")]),e._v(" 2. Motivation")]),e._v(" "),i("p",[e._v("N/A")]),e._v(" "),i("h2",{attrs:{id:"_3-functional-specification"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-functional-specification"}},[e._v("#")]),e._v(" 3. Functional Specification")]),e._v(" "),i("p",[e._v("Indexes contain a set of documents in which to search and have their specific settings.")]),e._v(" "),i("p",[e._v("See "),i("RouterLink",{attrs:{to:"/specifications/text/0124-documents-api.html"}},[e._v("Documents API specification")]),e._v(" and "),i("RouterLink",{attrs:{to:"/specifications/text/0123-settings-api.html"}},[e._v("Settings API specification")]),e._v(" for more details.")],1),e._v(" "),i("h3",{attrs:{id:"_3-1-api-endpoints-definition"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-api-endpoints-definition"}},[e._v("#")]),e._v(" 3.1. API Endpoints Definition")]),e._v(" "),i("h3",{attrs:{id:"_3-1-index-api-resource-definition"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-index-api-resource-definition"}},[e._v("#")]),e._v(" 3.1. "),i("code",[e._v("index")]),e._v(" API Resource Definition")]),e._v(" "),i("table",[i("thead",[i("tr",[i("th",[e._v("Field")]),e._v(" "),i("th",[e._v("Type")]),e._v(" "),i("th",[e._v("Required")])])]),e._v(" "),i("tbody",[i("tr",[i("td",[i("a",{attrs:{href:"#311-uid"}},[e._v("uid")])]),e._v(" "),i("td",[e._v("string")]),e._v(" "),i("td",[e._v("True")])]),e._v(" "),i("tr",[i("td",[i("a",{attrs:{href:"#312-name"}},[e._v("name")])]),e._v(" "),i("td",[e._v("string")]),e._v(" "),i("td",[e._v("False")])]),e._v(" "),i("tr",[i("td",[i("a",{attrs:{href:"#313-primaryKey"}},[e._v("primaryKey")])]),e._v(" "),i("td",[e._v("string / "),i("code",[e._v("null")])]),e._v(" "),i("td",[e._v("False")])]),e._v(" "),i("tr",[i("td",[i("a",{attrs:{href:"#314-createdAt"}},[e._v("createdAt")])]),e._v(" "),i("td",[e._v("string")]),e._v(" "),i("td",[e._v("False")])]),e._v(" "),i("tr",[i("td",[i("a",{attrs:{href:"#315-updatedAt"}},[e._v("updatedAt")])]),e._v(" "),i("td",[e._v("string")]),e._v(" "),i("td",[e._v("False")])])])]),e._v(" "),i("h4",{attrs:{id:"_3-1-1-uid"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-1-uid"}},[e._v("#")]),e._v(" 3.1.1. "),i("code",[e._v("uid")])]),e._v(" "),i("ul",[i("li",[e._v("Type: string")]),e._v(" "),i("li",[e._v("Required: true")])]),e._v(" "),i("p",[e._v("A unique identifier for the index.")]),e._v(" "),i("p",[e._v("This field is mandatory when creating an index and cannot be changed afterwards.")]),e._v(" "),i("p",[e._v("The field "),i("code",[e._v("uid")]),e._v(" can be an integer or a string containing only alphanumeric characters, hyphens (-) and underscores (_).")]),e._v(" "),i("h4",{attrs:{id:"_3-1-2-name"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-2-name"}},[e._v("#")]),e._v(" 3.1.2. "),i("code",[e._v("name")])]),e._v(" "),i("ul",[i("li",[e._v("Type: string")]),e._v(" "),i("li",[e._v("Required: false")])]),e._v(" "),i("p",[e._v("This field is automatically generated by the engine when creating an index and is equal to the value of "),i("code",[e._v("uid")]),e._v(".")]),e._v(" "),i("p",[e._v("It is not possible to give a custom value to "),i("code",[e._v("name")]),e._v(" when creating or updating an index.")]),e._v(" "),i("h4",{attrs:{id:"_3-1-3-primarykey"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-3-primarykey"}},[e._v("#")]),e._v(" 3.1.3. "),i("code",[e._v("primaryKey")])]),e._v(" "),i("ul",[i("li",[e._v("Type: string")]),e._v(" "),i("li",[e._v("Required: false")]),e._v(" "),i("li",[e._v("Default: "),i("code",[e._v("null")])])]),e._v(" "),i("p",[e._v("The primary key is the attribute in a document whose value is unique amongst all the other documents.")]),e._v(" "),i("p",[e._v("This field allows bypassing the auto-inference mechanism of the document identifiers.")]),e._v(" "),i("p",[e._v("By default, the "),i("code",[e._v("primaryKey")]),e._v(" will be chosen by the auto-inference mechanism by the engine when a first document is indexed.")]),e._v(" "),i("p",[e._v("Specifying this field tells the engine to use the document attribute specified in "),i("code",[e._v("primaryKey")]),e._v(" and bypasses this mechanism.")]),e._v(" "),i("p",[e._v("When the index is empty, it is possible to modify the "),i("code",[e._v("primaryKey")]),e._v(".")]),e._v(" "),i("h4",{attrs:{id:"_3-1-4-createdat"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-4-createdat"}},[e._v("#")]),e._v(" 3.1.4. "),i("code",[e._v("createdAt")])]),e._v(" "),i("ul",[i("li",[e._v("Type: string")]),e._v(" "),i("li",[e._v("Required: false")])]),e._v(" "),i("p",[e._v("The creation date on which the index has been created.")]),e._v(" "),i("p",[e._v("Automatically generated by the engine at the creation of an index.")]),e._v(" "),i("p",[e._v("Represented with the "),i("code",[e._v("RFC 3339")]),e._v(" format.")]),e._v(" "),i("h4",{attrs:{id:"_3-1-5-updatedat"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-5-updatedat"}},[e._v("#")]),e._v(" 3.1.5. "),i("code",[e._v("updatedAt")])]),e._v(" "),i("ul",[i("li",[e._v("Type: string")]),e._v(" "),i("li",[e._v("Required: false")])]),e._v(" "),i("p",[e._v("The latest date on which the index has been updated.")]),e._v(" "),i("p",[e._v("Automatically generated by the engine at the creation/update of an index.")]),e._v(" "),i("p",[e._v("Represented wih the "),i("code",[e._v("RFC 3339")]),e._v(" format.")]),e._v(" "),i("h3",{attrs:{id:"_3-2-api-endpoints-definition"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-api-endpoints-definition"}},[e._v("#")]),e._v(" 3.2. API Endpoints Definition")]),e._v(" "),i("p",[e._v("Manipulate indexes of a Meilisearch instance.")]),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"#321-get---indexes"}},[e._v("3.2.1. "),i("code",[e._v("GET")]),e._v(" - "),i("code",[e._v("indexes")])])]),e._v(" "),i("li",[i("a",{attrs:{href:"#322-get---indexesindexuid"}},[e._v("3.2.2. "),i("code",[e._v("GET")]),e._v(" - "),i("code",[e._v("indexes/:index_uid")])])]),e._v(" "),i("li",[i("a",{attrs:{href:"#323-post---indexes"}},[e._v("3.2.3. "),i("code",[e._v("POST")]),e._v(" - "),i("code",[e._v("indexes")])])]),e._v(" "),i("li",[i("a",{attrs:{href:"#324-put---indexesindexuid"}},[e._v("3.2.4. "),i("code",[e._v("PUT")]),e._v(" - "),i("code",[e._v("indexes/:index_uid")])])]),e._v(" "),i("li",[i("a",{attrs:{href:"#325-delete---indexesindexuid"}},[e._v("3.2.5. "),i("code",[e._v("DELETE")]),e._v(" - "),i("code",[e._v("indexes/:index_uid")])])])]),e._v(" "),i("h4",{attrs:{id:"_3-2-1-get-indexes"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-1-get-indexes"}},[e._v("#")]),e._v(" 3.2.1. "),i("code",[e._v("GET")]),e._v(" - "),i("code",[e._v("indexes")])]),e._v(" "),i("p",[e._v("List all indexes of a Meilisearch instance.")]),e._v(" "),i("h5",{attrs:{id:"_3-2-1-1-response-definition"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-1-1-response-definition"}},[e._v("#")]),e._v(" 3.2.1.1. Response Definition")]),e._v(" "),i("p",[e._v("Returns an array made of multiple index API resource objects. See "),i("a",{attrs:{href:"#3121-response-definition"}},[e._v("3.1.2.1. Response Definition")]),e._v(" section.")]),e._v(" "),i("h4",{attrs:{id:"_3-2-2-get-indexes-index-uid"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-2-get-indexes-index-uid"}},[e._v("#")]),e._v(" 3.2.2. "),i("code",[e._v("GET")]),e._v(" - "),i("code",[e._v("indexes/:index_uid")])]),e._v(" "),i("p",[e._v("Fetch an index of a Meilisearch instance.")]),e._v(" "),i("h5",{attrs:{id:"_3-2-2-1-response-definition"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-2-1-response-definition"}},[e._v("#")]),e._v(" 3.2.2.1. Response Definition")]),e._v(" "),i("table",[i("thead",[i("tr",[i("th",[e._v("Field")]),e._v(" "),i("th",[e._v("Type")]),e._v(" "),i("th",[e._v("Required")])])]),e._v(" "),i("tbody",[i("tr",[i("td",[i("code",[e._v("uid")])]),e._v(" "),i("td",[e._v("string")]),e._v(" "),i("td",[e._v("true")])]),e._v(" "),i("tr",[i("td",[i("code",[e._v("name")])]),e._v(" "),i("td",[e._v("string")]),e._v(" "),i("td",[e._v("true")])]),e._v(" "),i("tr",[i("td",[i("code",[e._v("primaryKey")])]),e._v(" "),i("td",[e._v("string / "),i("code",[e._v("null")])]),e._v(" "),i("td",[e._v("true")])]),e._v(" "),i("tr",[i("td",[i("code",[e._v("createdAt")])]),e._v(" "),i("td",[e._v("string")]),e._v(" "),i("td",[e._v("true")])]),e._v(" "),i("tr",[i("td",[i("code",[e._v("updatedAt")])]),e._v(" "),i("td",[e._v("string")]),e._v(" "),i("td",[e._v("true")])])])]),e._v(" "),i("p",[e._v("The "),i("code",[e._v("name")]),e._v(" field has the same value as the "),i("code",[e._v("uid")]),e._v(".")]),e._v(" "),i("h5",{attrs:{id:"_3-2-2-2-errors"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-2-2-errors"}},[e._v("#")]),e._v(" 3.2.2.2. Errors")]),e._v(" "),i("ul",[i("li",[e._v("🔴 If the requested "),i("code",[e._v("index_uid")]),e._v(" does not exist, the API returns an "),i("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#index_not_found"}},[e._v("index_not_found")]),e._v(" error.")],1)]),e._v(" "),i("h4",{attrs:{id:"_3-2-3-post-indexes"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-3-post-indexes"}},[e._v("#")]),e._v(" 3.2.3. "),i("code",[e._v("POST")]),e._v(" - "),i("code",[e._v("indexes")])]),e._v(" "),i("p",[e._v("Creates an index.")]),e._v(" "),i("h5",{attrs:{id:"_3-2-3-1-request-payload-definition"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-3-1-request-payload-definition"}},[e._v("#")]),e._v(" 3.2.3.1. Request Payload Definition")]),e._v(" "),i("table",[i("thead",[i("tr",[i("th",[e._v("Field")]),e._v(" "),i("th",[e._v("Type")]),e._v(" "),i("th",[e._v("Required")])])]),e._v(" "),i("tbody",[i("tr",[i("td",[i("code",[e._v("uid")])]),e._v(" "),i("td",[e._v("string")]),e._v(" "),i("td",[e._v("true")])]),e._v(" "),i("tr",[i("td",[i("code",[e._v("primaryKey")])]),e._v(" "),i("td",[e._v("string / "),i("code",[e._v("null")])]),e._v(" "),i("td",[e._v("false")])])])]),e._v(" "),i("h5",{attrs:{id:"_3-2-3-2-response-definition"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-3-2-response-definition"}},[e._v("#")]),e._v(" 3.2.3.2. Response Definition")]),e._v(" "),i("p",[e._v("When the request is successful, Meilisearch returns the HTTP code "),i("code",[e._v("202 Accepted")]),e._v(". The response's content is the summarized representation of the received asynchronous task.")]),e._v(" "),i("p",[e._v("See "),i("RouterLink",{attrs:{to:"/specifications/text/0060-tasks-api.html#summarized-task-object-for-202-accepted"}},[e._v("Summarized "),i("code",[e._v("task")]),e._v(" Object for "),i("code",[e._v("202 Accepted")])]),e._v(".")],1),e._v(" "),i("h5",{attrs:{id:"_3-2-3-3-errors"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-3-3-errors"}},[e._v("#")]),e._v(" 3.2.3.3. Errors")]),e._v(" "),i("ul",[i("li",[e._v("🔴 Omitting Content-Type header returns a "),i("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#missing_content_type"}},[e._v("missing_content_type")]),e._v(" error.")],1),e._v(" "),i("li",[e._v("🔴 Sending an empty Content-Type returns an "),i("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#invalid_content_type"}},[e._v("invalid_content_type")]),e._v(" error.")],1),e._v(" "),i("li",[e._v("🔴 Sending a different Content-Type than "),i("code",[e._v("application/json")]),e._v(" returns an "),i("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#invalid_content_type"}},[e._v("invalid_content_type")]),e._v(" error.")],1),e._v(" "),i("li",[e._v("🔴 Sending an empty payload returns a "),i("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#missing_payload"}},[e._v("missing_payload")]),e._v(" error.")],1),e._v(" "),i("li",[e._v("🔴 Sending an invalid JSON payload returns a "),i("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#malformed_payload"}},[e._v("malformed_payload")]),e._v(" error.")],1),e._v(" "),i("li",[e._v("🔴 Sending a value with a different type than "),i("code",[e._v("string")]),e._v(" for "),i("code",[e._v("uid")]),e._v(" will return a "),i("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#bad_request"}},[e._v("bad_request")]),e._v(" error.")],1),e._v(" "),i("li",[e._v("🔴 Sending an invalid "),i("code",[e._v("uid")]),e._v(" returns an "),i("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#invalid_index_uid"}},[e._v("invalid_index_uid")]),e._v(" error.")],1),e._v(" "),i("li",[e._v("🔴 Sending a value with a different type than "),i("code",[e._v("string")]),e._v(" or "),i("code",[e._v("null")]),e._v(" for "),i("code",[e._v("primaryKey")]),e._v(" will return a "),i("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#bad_request"}},[e._v("bad_request")]),e._v(" error.")],1)]),e._v(" "),i("h6",{attrs:{id:"_3-2-3-3-1-async-errors"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-3-3-1-async-errors"}},[e._v("#")]),e._v(" 3.2.3.3.1. Async Errors")]),e._v(" "),i("ul",[i("li",[e._v("🔴 When Meilisearch is secured by a master key, if the API Key used do not have the "),i("code",[e._v("indexes.create")]),e._v(" action defined, the API returns an "),i("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#index_not_found"}},[e._v("index_not_found")]),e._v(" error in the related asynchronous "),i("code",[e._v("task")]),e._v(" resource. See "),i("a",{attrs:{href:"#3222-response-definition"}},[e._v("3.2.2.2. Response Definition")]),e._v(".")],1),e._v(" "),i("li",[e._v("🔴 Sending a "),i("code",[e._v("uid")]),e._v(" that already exists returns an "),i("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#index_already_exists"}},[e._v("index_already_exists")]),e._v(" error.")],1)]),e._v(" "),i("h4",{attrs:{id:"_3-2-4-put-indexes-index-uid"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-4-put-indexes-index-uid"}},[e._v("#")]),e._v(" 3.2.4. "),i("code",[e._v("PUT")]),e._v(" - "),i("code",[e._v("indexes/:index_uid")])]),e._v(" "),i("p",[e._v("Updates an index.")]),e._v(" "),i("p",[e._v("The "),i("code",[e._v("primaryKey")]),e._v(" field can be updated when the index is empty. If the "),i("code",[e._v("primaryKey")]),e._v(" is not defined, the indexing process will try to auto-infer the "),i("code",[e._v("primaryKey")]),e._v(" by searching the first attribute containing "),i("code",[e._v("id")]),e._v(" in the first document payload to index.")]),e._v(" "),i("h5",{attrs:{id:"_3-2-4-1-request-payload-definition"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-4-1-request-payload-definition"}},[e._v("#")]),e._v(" 3.2.4.1. Request Payload Definition")]),e._v(" "),i("table",[i("thead",[i("tr",[i("th",[e._v("Field")]),e._v(" "),i("th",[e._v("Type")]),e._v(" "),i("th",[e._v("Required")])])]),e._v(" "),i("tbody",[i("tr",[i("td",[i("code",[e._v("primaryKey")])]),e._v(" "),i("td",[e._v("string / "),i("code",[e._v("null")])]),e._v(" "),i("td",[e._v("False")])])])]),e._v(" "),i("h5",{attrs:{id:"_3-2-4-2-response-definition"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-4-2-response-definition"}},[e._v("#")]),e._v(" 3.2.4.2. Response Definition")]),e._v(" "),i("p",[e._v("When the request is successful, Meilisearch returns the HTTP code "),i("code",[e._v("202 Accepted")]),e._v(". The response's content is the summarized representation of the received asynchronous task.")]),e._v(" "),i("p",[e._v("See "),i("RouterLink",{attrs:{to:"/specifications/text/0060-tasks-api.html#summarized-task-object-for-202-accepted"}},[e._v("Summarized "),i("code",[e._v("task")]),e._v(" Object for "),i("code",[e._v("202 Accepted")])]),e._v(".")],1),e._v(" "),i("h5",{attrs:{id:"_3-2-4-3-errors"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-4-3-errors"}},[e._v("#")]),e._v(" 3.2.4.3. Errors")]),e._v(" "),i("ul",[i("li",[e._v("🔴 Omitting Content-Type header returns a "),i("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#missing_content_type"}},[e._v("missing_content_type")]),e._v(" error.")],1),e._v(" "),i("li",[e._v("🔴 Sending an empty Content-Type returns an "),i("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#invalid_content_type"}},[e._v("invalid_content_type")]),e._v(" error.")],1),e._v(" "),i("li",[e._v("🔴 Sending a different Content-Type than "),i("code",[e._v("application/json")]),e._v(" returns an "),i("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#invalid_content_type"}},[e._v("invalid_content_type")]),e._v(" error.")],1),e._v(" "),i("li",[e._v("🔴 Sending an empty payload returns a "),i("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#missing_payload"}},[e._v("missing_payload")]),e._v(" error.")],1),e._v(" "),i("li",[e._v("🔴 Sending an invalid JSON payload returns a "),i("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#malformed_payload"}},[e._v("malformed_payload")]),e._v(" error.")],1)]),e._v(" "),i("h6",{attrs:{id:"_3-2-4-3-1-async-errors"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-4-3-1-async-errors"}},[e._v("#")]),e._v(" 3.2.4.3.1. Async Errors")]),e._v(" "),i("ul",[i("li",[e._v("🔴 When updating the "),i("code",[e._v("primaryKey")]),e._v(", if the previous "),i("code",[e._v("primaryKey")]),e._v(" value has already been used for a document, the API returns an "),i("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#index_primary_key_already_exists"}},[e._v("index_primary_key_already_exists")]),e._v(" error.")],1),e._v(" "),i("li",[e._v("🔴 If the requested "),i("code",[e._v("index_uid")]),e._v(" does not exist, the API returns an "),i("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#index_not_found"}},[e._v("index_not_found")]),e._v(" error.")],1)]),e._v(" "),i("h4",{attrs:{id:"_3-2-5-delete-indexes-index-uid"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-5-delete-indexes-index-uid"}},[e._v("#")]),e._v(" 3.2.5. "),i("code",[e._v("DELETE")]),e._v(" - "),i("code",[e._v("indexes/:index_uid")])]),e._v(" "),i("p",[e._v("Deletes an index.")]),e._v(" "),i("h5",{attrs:{id:"_3-2-4-1-response-definition"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-4-1-response-definition"}},[e._v("#")]),e._v(" 3.2.4.1. Response Definition")]),e._v(" "),i("p",[e._v("When the request is successful, Meilisearch returns the HTTP code "),i("code",[e._v("202 Accepted")]),e._v(". The response's content is the summarized representation of the received asynchronous task.")]),e._v(" "),i("p",[e._v("See "),i("RouterLink",{attrs:{to:"/specifications/text/0060-tasks-api.html#summarized-task-object-for-202-accepted"}},[e._v("Summarized "),i("code",[e._v("task")]),e._v(" Object for "),i("code",[e._v("202 Accepted")])]),e._v(".")],1),e._v(" "),i("h5",{attrs:{id:"_3-2-4-2-errors"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-4-2-errors"}},[e._v("#")]),e._v(" 3.2.4.2. Errors")]),e._v(" "),i("h6",{attrs:{id:"_3-2-4-2-1-async-errors"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-4-2-1-async-errors"}},[e._v("#")]),e._v(" 3.2.4.2.1 Async Errors")]),e._v(" "),i("ul",[i("li",[e._v("🔴 If the requested "),i("code",[e._v("index_uid")]),e._v(" does not exist, the API returns an "),i("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#index_not_found"}},[e._v("index_not_found")]),e._v(" error.")],1)]),e._v(" "),i("h4",{attrs:{id:"_3-2-6-general-errors"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-6-general-errors"}},[e._v("#")]),e._v(" 3.2.6. General Errors")]),e._v(" "),i("p",[e._v("These errors apply to all endpoints described here.")]),e._v(" "),i("h5",{attrs:{id:"_3-2-6-1-auth-errors"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-6-1-auth-errors"}},[e._v("#")]),e._v(" 3.2.6.1 Auth Errors")]),e._v(" "),i("p",[e._v("The auth layer can return the following errors if Meilisearch is secured (a master-key is defined).")]),e._v(" "),i("ul",[i("li",[e._v("🔴 Accessing this route without the "),i("code",[e._v("Authorization")]),e._v(" header returns a "),i("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#missing_authorization_header"}},[e._v("missing_authorization_header")]),e._v(" error.")],1),e._v(" "),i("li",[e._v("🔴 Accessing this route with a key that does not have the required permissions (i.e. other than the master-key) returns an "),i("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#invalid_api_key"}},[e._v("invalid_api_key")]),e._v(" error.")],1)]),e._v(" "),i("h2",{attrs:{id:"_4-technical-details"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_4-technical-details"}},[e._v("#")]),e._v(" 4. Technical Details")]),e._v(" "),i("p",[e._v("N/A")]),e._v(" "),i("h2",{attrs:{id:"_5-future-possibilities"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_5-future-possibilities"}},[e._v("#")]),e._v(" 5. Future Possibilities")]),e._v(" "),i("ul",[i("li",[e._v("Delete "),i("code",[e._v("uid")]),e._v(" or "),i("code",[e._v("name")]),e._v(".")]),e._v(" "),i("li",[e._v("Rework the "),i("code",[e._v("primaryKey")]),e._v(" concept")])])])}),[],!1,null,null,null);t.default=a.exports}}]);