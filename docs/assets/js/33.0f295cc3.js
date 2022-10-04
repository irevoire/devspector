(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{457:function(e,t,a){"use strict";a.r(t);var s=a(62),i=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("ul",[a("li",[e._v("Title: Auto-Batching")])]),e._v(" "),a("h1",{attrs:{id:"auto-batching"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#auto-batching"}},[e._v("#")]),e._v(" Auto-Batching")]),e._v(" "),a("h2",{attrs:{id:"_1-summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-summary"}},[e._v("#")]),e._v(" 1. Summary")]),e._v(" "),a("p",[e._v("Meilisearch can automatically group consecutive asynchronous "),a("code",[e._v("documentAddition")]),e._v(" or "),a("code",[e._v("documentPartial")]),e._v(" tasks for the same index via an automatic batching mechanism.")]),e._v(" "),a("p",[e._v("The user can disable this auto-batching behavior. See "),a("a",{attrs:{href:"#32-auto-batching-mechanisms-options"}},[e._v("3.2. Auto-batching mechanisms options")]),e._v(" section.")]),e._v(" "),a("h2",{attrs:{id:"_2-motivation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-motivation"}},[e._v("#")]),e._v(" 2. Motivation")]),e._v(" "),a("p",[e._v("We have regularly collected user pain points pointing out the slow indexing over the last year. We explained several times to users to make batches containing a maximum of documents to be updated/added to compress the indexing time of specific data structures.")]),e._v(" "),a("p",[e._v("To make Meilisearch easier to use, we explored the idea of automatically creating these batches within Meilisearch before indexing users’ documents.")]),e._v(" "),a("h2",{attrs:{id:"_3-functional-specification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-functional-specification"}},[e._v("#")]),e._v(" 3. Functional Specification")]),e._v(" "),a("h3",{attrs:{id:"_3-1-explanations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-explanations"}},[e._v("#")]),e._v(" 3.1. Explanations")]),e._v(" "),a("p",[e._v("A batch preserves the logical order of the tasks for a given index.")]),e._v(" "),a("p",[e._v("Only consecutive "),a("code",[e._v("documentAdditionOrUpdate")]),e._v(" tasks for the same index can be in the same batch. All "),a("code",[e._v("tasks")]),e._v(" concerning other operations will also be part of a batch having only one task.")]),e._v(" "),a("h4",{attrs:{id:"_3-1-1-grouping-tasks-to-a-single-batch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-1-grouping-tasks-to-a-single-batch"}},[e._v("#")]),e._v(" 3.1.1. Grouping tasks to a single batch")]),e._v(" "),a("p",[e._v("The scheduling program that groups tasks within a single batch is triggered when an asynchronous "),a("code",[e._v("task")]),e._v(" currently processed reaches a terminal state as "),a("code",[e._v("succeeded")]),e._v(" or "),a("code",[e._v("failed")]),e._v(".")]),e._v(" "),a("p",[e._v("In other words, when a scheduled "),a("code",[e._v("documentAdditionOrUpdate")]),e._v(" task for a given index is picked from the task queue, the scheduler fetches and groups all "),a("code",[e._v("documentAdditionOrUpdate")]),e._v(" tasks for that same index in a batch.")]),e._v(" "),a("p",[e._v("The more similar consecutive tasks the user sends in a row, the more likely the batching mechanism can group these tasks.")]),e._v(" "),a("h5",{attrs:{id:"_3-1-1-1-schema"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-1-1-schema"}},[e._v("#")]),e._v(" 3.1.1.1. Schema")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/3692335/145787054-4cb07b5e-c80e-498a-8843-d0cc46329e9b.png",alt:"Auto-batching Process"}})]),e._v(" "),a("h5",{attrs:{id:"_3-1-1-2-batchuid-generation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-1-2-batchuid-generation"}},[e._v("#")]),e._v(" 3.1.1.2. "),a("code",[e._v("batchUid")]),e._v(" generation")]),e._v(" "),a("p",[e._v("All tasks are part of a batch identified by an internal "),a("code",[e._v("batchUid")]),e._v(" field. A task batch preserves the logical order of the tasks for a given index. The batch identifiers are unique and strictly increasing. The "),a("code",[e._v("batchUid")]),e._v(" field is internal; thus not visible on a "),a("code",[e._v("task")]),e._v(" resource.")]),e._v(" "),a("h4",{attrs:{id:"_3-1-2-impacts-on-task-api-resource"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-2-impacts-on-task-api-resource"}},[e._v("#")]),e._v(" 3.1.2. Impacts on "),a("code",[e._v("task")]),e._v(" API resource")]),e._v(" "),a("ul",[a("li",[e._v("The different tasks grouped in a batch are processed within the same transaction. But if a task fails within a batch, the whole batch does not fail, only the related task.")]),e._v(" "),a("li",[e._v("Tasks within the same batch share the same values for the "),a("code",[e._v("startedAt")]),e._v(", "),a("code",[e._v("finishedAt")]),e._v(", "),a("code",[e._v("duration")]),e._v(" fields, and the same "),a("code",[e._v("error")]),e._v(" object if an error occurs for a "),a("code",[e._v("task")]),e._v(" during the batch processing.")]),e._v(" "),a("li",[e._v("If a batch contains many "),a("code",[e._v("tasks")]),e._v(", the "),a("code",[e._v("task")]),e._v(" "),a("code",[e._v("details")]),e._v(" "),a("code",[e._v("indexedDocuments")]),e._v(" is identical in all "),a("code",[e._v("tasks")]),e._v(" belonging to the same processed "),a("code",[e._v("batch")]),e._v(".")])]),e._v(" "),a("h3",{attrs:{id:"_3-2-auto-batching-mechanisms-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-auto-batching-mechanisms-options"}},[e._v("#")]),e._v(" 3.2. Auto-batching mechanisms options")]),e._v(" "),a("h3",{attrs:{id:"_3-2-1-disable-auto-batching"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-1-disable-auto-batching"}},[e._v("#")]),e._v(" 3.2.1. "),a("code",[e._v("--disable-auto-batching")])]),e._v(" "),a("p",[e._v("By default, the auto-batching feature is enabled.")]),e._v(" "),a("p",[e._v("The auto-batching feature can be desactivated by passing the command flag "),a("code",[e._v("--disable-auto-batching")]),e._v(" (or the environment variable "),a("code",[e._v("MEILI_DISABLE_AUTO_BATCHING")]),e._v(") to Meilisearch at launch.")]),e._v(" "),a("h2",{attrs:{id:"_4-technical-aspects"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-technical-aspects"}},[e._v("#")]),e._v(" 4. Technical Aspects")]),e._v(" "),a("p",[e._v("N/A")]),e._v(" "),a("h2",{attrs:{id:"_5-future-possibilities"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-future-possibilities"}},[e._v("#")]),e._v(" 5. Future Possibilities")]),e._v(" "),a("ul",[a("li",[e._v("Extends it for all consecutive payload types.")]),e._v(" "),a("li",[e._v("Expose the "),a("code",[e._v("batchUid")]),e._v(" field and add a filter capability on it on the "),a("code",[e._v("/tasks")]),e._v(" endpoints.")]),e._v(" "),a("li",[e._v("Report the documents that could not be indexed to the user in a more precise manner.")]),e._v(" "),a("li",[e._v("Optimize some tasks sequence, for example if there is a document addition followed by an index deletion, we could skip the document addition.")])])])}),[],!1,null,null,null);t.default=i.exports}}]);