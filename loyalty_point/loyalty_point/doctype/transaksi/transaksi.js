// Copyright (c) 2019, MDB and contributors
// For license information, please see license.txt

frappe.ui.form.on('Transaksi', {
	refresh: function(frm) {

	},
	tukar_point: function(frm){
		if(frm.doc.tukar_point == 'Ya'){
			if(frm.doc.point_member <= 30 && frm.doc.point_member >= 10){
				frm.set_value("total_transaksi",frm.doc.total_transaksi*0.1)
				frm.set_value("point_member",0)
			}else if(frm.doc.point_member >= 31 && frm.doc.point_member <=60 ){
				frm.set_value("total_transaksi",frm.doc.total_transaksi*0.3)
				frm.set_value("point_member",0)
			}else if(frm.doc.point_member >= 61 && frm.doc.point_member <=130){
				frm.set_value("total_transaksi",frm.doc.total_transaksi*0.5)
				frm.set_value("point_member",0)
			}else if(frm.doc.point_member == 0){
				frappe.throw(__('Point Member Belum Dapat DiTukarkan'));
			}
		}else{
			frm.set_value("total_transaksi",frm.doc.total_transaksi);
		}
	}
});

frappe.ui.form.on("Transaksi Line", "jumlah_item", function(frm, cdt, cdn) {
	var total_transaksi_user = frm.doc.item;
	var total = 0 
	var total_point = 0
	for(var i in total_transaksi_user) {
		
		//total = total + total_transaksi_user[i].jumlah_item
		total = total + ((total_transaksi_user[i].harga_item*total_transaksi_user[i].jumlah_item))
		total_point = total_point + ((total_transaksi_user[i].point_item*total_transaksi_user[i].jumlah_item))
	 }
 
	 frm.set_value("total_transaksi",total)
	 frm.set_value("total_point", total_point)
 
 });