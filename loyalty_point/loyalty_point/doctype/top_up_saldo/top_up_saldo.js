// Copyright (c) 2019, MDB and contributors
// For license information, please see license.txt

frappe.ui.form.on('Top Up Saldo', {
	refresh: function(frm) {

	}
});

frappe.ui.form.on("Top Up Saldo Line", "uang", function(frm, cdt, cdn) {

	var top_up_saldos = frm.doc.top_up_saldo;
	var total = 0
	for(var i in top_up_saldos) {
	 total = total + top_up_saldos[i].uang
	 }
 
	 frm.set_value("saldo_member",total)
 
 });