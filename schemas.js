"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RonpaFlatRecordSchema = exports.EditHistorySchema = exports.ReactionSchema = exports.RonpaThesisSchema = void 0;
var mongoose_1 = require("mongoose");
exports.RonpaThesisSchema = new mongoose_1.Schema({
    insiders: {
        type: [String],
        required: true,
    },
    extras: {
        type: mongoose_1.Schema.Types.Mixed,
        required: false,
    },
}, {
    _id: false,
});
exports.ReactionSchema = new mongoose_1.Schema({
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
exports.EditHistorySchema = new mongoose_1.Schema({
    at: {
        type: Date,
        required: true,
    },
    by: {
        type: String,
        required: true,
    },
    before: {
        type: mongoose_1.Schema.Types.Mixed,
        required: true,
    },
    after: {
        type: mongoose_1.Schema.Types.Mixed,
        required: true,
    },
}, {
    _id: false,
});
exports.RonpaFlatRecordSchema = new mongoose_1.Schema({
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
        type: mongoose_1.Schema.Types.Mixed,
        required: true,
    },
    thesis: {
        type: exports.RonpaThesisSchema,
        required: false,
    },
    type: {
        type: String,
        required: false,
    },
    reactions: {
        type: [exports.ReactionSchema],
        required: false,
    },
    editHistories: {
        type: [exports.EditHistorySchema],
        required: false,
    },
    reply: {
        type: String,
        required: false,
    },
    isRobot: {
        type: mongoose_1.Schema.Types.Boolean,
        required: false,
    },
    isGenerated: {
        type: mongoose_1.Schema.Types.Boolean,
        required: false,
    },
    isRead: {
        type: mongoose_1.Schema.Types.Boolean,
        required: false,
    },
    extras: {
        type: mongoose_1.Schema.Types.Mixed,
        required: false,
    },
}, {
    _id: false,
});
