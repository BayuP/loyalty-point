# -*- coding: utf-8 -*-
# Copyright (c) 2019, MDB and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class Transaksi(Document):
	pass

	def on_submit(self):
		self.transaksi_member()

	def transaksi_member(self):
		if(self.item):
			member = frappe.get_doc("Master Member", self.id_member)
			member.saldo_member -= self.total_transaksi

			if(self.tukar_point == 'Ya'):
				member.point_member = 0
			else:
				member.point_member += self.total_point

			if(self.point_member > 30 and self.point_member < 70):
				member.status_member = 'silver'
			elif(self.point_member > 71):
				member.status_member = 'gold'
			member.save()

	
