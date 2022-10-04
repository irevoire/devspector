(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{477:function(t,e,r){"use strict";r.r(e);var a=r(62),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"version-api"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#version-api"}},[t._v("#")]),t._v(" Version API")]),t._v(" "),r("h2",{attrs:{id:"_1-summary"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-summary"}},[t._v("#")]),t._v(" 1. Summary")]),t._v(" "),r("p",[t._v("This specification describes the version API endpoint. The "),r("code",[t._v("/version")]),t._v(" route allows to check the version of a running Meilisearch instance.")]),t._v(" "),r("h2",{attrs:{id:"_2-motivation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-motivation"}},[t._v("#")]),t._v(" 2. Motivation")]),t._v(" "),r("p",[t._v("Since users don't always have SSH access at hand, it can be useful to give information about the version concerned when they encounter a bug or a problem.")]),t._v(" "),r("h2",{attrs:{id:"_3-functional-specification"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-functional-specification"}},[t._v("#")]),t._v(" 3. Functional Specification")]),t._v(" "),r("h3",{attrs:{id:"_3-1-version-api-resource-properties"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-version-api-resource-properties"}},[t._v("#")]),t._v(" 3.1. "),r("code",[t._v("version")]),t._v(" API resource properties")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Field")]),t._v(" "),r("th",[t._v("Type")]),t._v(" "),r("th",[t._v("Required")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("a",{attrs:{href:"#311-commitSha"}},[t._v("commitSha")])]),t._v(" "),r("td",[t._v("String")]),t._v(" "),r("td",[t._v("True")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"#312-commitDate"}},[t._v("commitDate")])]),t._v(" "),r("td",[t._v("String")]),t._v(" "),r("td",[t._v("True")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"#313-pkgVersion"}},[t._v("pkgVersion")])]),t._v(" "),r("td",[t._v("String")]),t._v(" "),r("td",[t._v("True")])])])]),t._v(" "),r("h4",{attrs:{id:"_3-1-1-commitsha"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-1-commitsha"}},[t._v("#")]),t._v(" 3.1.1. "),r("code",[t._v("commitSHa")])]),t._v(" "),r("ul",[r("li",[t._v("Type: String")]),t._v(" "),r("li",[t._v("Required: True")])]),t._v(" "),r("p",[t._v("The git commit identifier that tagged this release version number.")]),t._v(" "),r("h4",{attrs:{id:"_3-1-2-commitdate"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-2-commitdate"}},[t._v("#")]),t._v(" 3.1.2. "),r("code",[t._v("commitDate")])]),t._v(" "),r("ul",[r("li",[t._v("Type: String")]),t._v(" "),r("li",[t._v("Required: True")])]),t._v(" "),r("p",[t._v("The date when the version tag has been created.")]),t._v(" "),r("h4",{attrs:{id:"_3-1-3-pkgversion"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-3-pkgversion"}},[t._v("#")]),t._v(" 3.1.3. "),r("code",[t._v("pkgVersion")])]),t._v(" "),r("ul",[r("li",[t._v("Type: String")]),t._v(" "),r("li",[t._v("Required: True")])]),t._v(" "),r("p",[t._v("The Meilisearch binary version number.")]),t._v(" "),r("h2",{attrs:{id:"_3-2-api-endpoints-definition"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-api-endpoints-definition"}},[t._v("#")]),t._v(" 3.2. API Endpoints Definition")]),t._v(" "),r("h3",{attrs:{id:"_3-2-1-get-version"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-1-get-version"}},[t._v("#")]),t._v(" 3.2.1. "),r("code",[t._v("GET")]),t._v(" - "),r("code",[t._v("version")])]),t._v(" "),r("p",[t._v("Retrieves the version information of the Meilisearch binary.")]),t._v(" "),r("p",[r("code",[t._v("200")]),t._v(" - Response body")]),t._v(" "),r("div",{staticClass:"language-json extra-class"},[r("pre",{pre:!0,attrs:{class:"language-json"}},[r("code",[t._v("    "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"commitSha"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"b46889b5f0f2f8b91438a08a358ba8f05fc09fc1"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"commitDate"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2019-11-15T09:51:54.278247+00:00"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pkgVersion"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.1.1"')]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),r("p",[t._v("All properties must be returned when the resource is retrieved.")]),t._v(" "),r("h3",{attrs:{id:"_3-2-2-general-errors"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-2-general-errors"}},[t._v("#")]),t._v(" 3.2.2. General Errors")]),t._v(" "),r("p",[t._v("These errors apply to all endpoints described here.")]),t._v(" "),r("h4",{attrs:{id:"_3-2-2-1-auth-errors"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-2-1-auth-errors"}},[t._v("#")]),t._v(" 3.2.2.1. Auth Errors")]),t._v(" "),r("p",[t._v("The auth layer can return the following errors if Meilisearch is secured (a master-key is defined).")]),t._v(" "),r("ul",[r("li",[t._v("🔴 Accessing this route without the "),r("code",[t._v("Authorization")]),t._v(" header returns a "),r("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#missing_authorization_header"}},[t._v("missing_authorization_header")]),t._v(" error.")],1),t._v(" "),r("li",[t._v("🔴 Accessing this route with a key that does not have  the "),r("code",[t._v("version")]),t._v(" action as a permission returns an "),r("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#invalid_api_key"}},[t._v("invalid_api_key")]),t._v(" error.")],1)]),t._v(" "),r("h2",{attrs:{id:"_2-technical-details"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-technical-details"}},[t._v("#")]),t._v(" 2. Technical Details")]),t._v(" "),r("p",[t._v("n/a")]),t._v(" "),r("h2",{attrs:{id:"_3-future-possibilities"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-future-possibilities"}},[t._v("#")]),t._v(" 3. Future Possibilities")]),t._v(" "),r("p",[t._v("n/a")])])}),[],!1,null,null,null);e.default=s.exports}}]);