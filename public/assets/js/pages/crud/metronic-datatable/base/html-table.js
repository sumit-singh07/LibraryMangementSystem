"use strict";
var KTDatatableHtmlTableDemo = {
    init: function() {
        var t;
        t = $(".kt-datatable").KTDatatable({
            data: {
                saveState: {
                    cookie: !1
                }
            },
            search: {
                input: $("#generalSearch")
            },
            columns: [{
                field: "DepositPaid",
                type: "number"
            }, {
                field: "OrderDate",
                type: "date",
                format: "YYYY-MM-DD"
            }, {
                field: "Status",
                title: "Status",
                autoHide: !1,
                template: function(t) {
                    var e = {
                        1: {
                            title: "Active",
                            class: "kt-badge--success"
                        },
                        2: {
                            title: "Deactive",
                            class: " kt-badge--danger"
                        },
                        3: {
                            title: "Pending",
                            class: " kt-badge--danger"
                        },
                        4: {
                            title: "Complete",
                            class: " kt-badge--success"
                        },
                        5: {
                            title: "Available",
                            class: " kt-badge--success"
                        },
                        6: {
                            title: "Not Available",
                            class: " kt-badge--danger"
                        },
                        7: {
                            title: "Warning",
                            class: " kt-badge--warning"
                        }
                    };
                    return '<span class="kt-badge ' + e[t.Status].class + ' kt-badge--inline kt-badge--pill">' + e[t.Status].title + "</span>"
                }
            }, {
                field: "Type",
                title: "Type",
                autoHide: !1,
                template: function(t) {
                    var e = {
                        1: {
                            title: "Online",
                            state: "danger"
                        },
                        2: {
                            title: "Retail",
                            state: "primary"
                        },
                        3: {
                            title: "Direct",
                            state: "success"
                        }
                    };
                    return '<span class="kt-badge kt-badge--' + e[t.Type].state + ' kt-badge--dot"></span>&nbsp;<span class="kt-font-bold kt-font-' + e[t.Type].state + '">' + e[t.Type].title + "</span>"
                }
            }]
        }), $("#kt_form_status").on("change", function() {
            t.search($(this).val().toLowerCase(), "Status")
        }), $("#kt_form_type").on("change", function() {
            t.search($(this).val().toLowerCase(), "Type")
        }), $("#kt_form_status,#kt_form_type").selectpicker()
    }
};
jQuery(document).ready(function() {
    KTDatatableHtmlTableDemo.init()
});