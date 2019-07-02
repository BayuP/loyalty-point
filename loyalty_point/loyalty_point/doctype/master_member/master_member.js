// Copyright (c) 2019, MDB and contributors
// For license information, please see license.txt

frappe.ui.form.on('Master Member', {
	refresh: function(frm) {
		if(frm.doc.point_member > 60){
			frm.set_value('status_member','silver');
		} else if(frm.doc.point_member > 100){
			frm.set_value('status_member','gold');
		}

	}
});


