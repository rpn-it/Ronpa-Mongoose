/**
 * @author WMXPY
 * @namespace Mongoose
 * @description Schemas
 */

import { Schema } from "mongoose";

export const RonpaThesisSchema = new Schema({

    insiders: {
        type: [String],
        required: true,
    },
    extras: {
        type: Schema.Types.Mixed,
        required: false,
    },
}, {
    _id: false,
});

export const ReactionSchema = new Schema({

    at: {
        type: Date,
        required: true,
    },
    by: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
}, {
    _id: false,
});

export const RonpaFlatRecordSchema = new Schema({

    // Required
    id: {
        type: String,
        required: true,
    },
    at: {
        type: Date,
        required: true,
    },
    by: {
        type: String,
        required: true,
    },
    story: {
        type: String,
        required: true,
    },
    content: {
        type: Schema.Types.Mixed,
        required: true,
    },

    // Optional
    type: {
        type: String,
        required: false,
    },
    reactions: {
        type: [ReactionSchema],
        required: false,
    },
    reply: {
        type: String,
        required: false,
    },
    extras: {
        type: Schema.Types.Mixed,
        required: false,
    },
    thesis: {
        type: RonpaThesisSchema,
        required: false,
    },
}, {
    _id: false,
});
