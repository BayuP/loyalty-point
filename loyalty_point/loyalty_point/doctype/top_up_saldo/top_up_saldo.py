# -*- coding: utf-8 -*-
# Copyright (c) 2019, MDB and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class TopUpSaldo(Document):
	pass

	def on_submit(self):
		self.top_up_saldo_member()

	def top_up_saldo_member(self):
		if(self.saldo_member):
			top_up = frappe.get_doc("Master Member", self.id_member)
			top_up.saldo_member += self.saldo_member
			top_up.save()


