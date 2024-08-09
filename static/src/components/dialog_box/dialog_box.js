/** @odoo-module **/

import { patch } from "@web/core/utils/patch";
import { ConfirmationDialog } from '@web/core/confirmation_dialog/confirmation_dialog';
import { StockBarcodeKanbanController } from '@stock_barcode/kanban/stock_barcode_kanban_controller';


patch(StockBarcodeKanbanController.prototype, {
    /**
     * Add a new batch picking from barcode
     *
     * @private
     * @override
     */
    openRecord(record) {
        return this.actionService.doAction('stock_barcode.stock_barcode_picking_client_action', {
            additionalContext: { active_id: record.resId },
        }).then(() => {
            this._showDialog();
        }).catch((error) => {
            console.error('Error while opening record:', error);
        });
    },

    _showDialog() {
        console.log('showing dialog');
        const dialogService = this.env.services.dialog;
    
        dialogService.add(ConfirmationDialog, {
            title: 'Product Barcode',
            body: 'continue after closing this dialog',
            confirm: () => {
                console.log('window closed');
            },
            cancel: ()=>{
                console.log('window closed')
            },

        });
    }
});