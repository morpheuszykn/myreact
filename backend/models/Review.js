const mongoose = require('mongoose');


const ReviewSchema = new mongoose.Schema({
  attractionId: { type: String, required: true }, // 景点 ID 或 YouTube 视频 ID
  comment: { type: String, required: true }, // 评论内容
  user: { type: String, default: 'Anonymous' }, // 评论者
  source: { type: String, enum: ['attraction', 'youtube'], default: 'attraction' }, // 评论来源
  createdAt: { type: Date, default: Date.now }, // 创建时间
});

module.exports = mongoose.model('Review', ReviewSchema);

