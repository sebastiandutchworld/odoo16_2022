/** @odoo-module */

const { Component } = owl;

export class Field extends Component {}

Field.template = "awesome_tshirt.Field";
Field.props = {
    slots: {
        type: Object,
        shape: {
            default: Object,
            title: { type: Object, optional: true },
        },
    },
    className: {
        type: String,
        optional: true,
    },
};