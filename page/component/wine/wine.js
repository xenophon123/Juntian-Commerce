const toolbar = [
  '../../image/nav/fav.png','../../image/nav/share.png', '../../image/nav/comment.png',
];
const app = getApp();
Page({
  data: {
    // 当前详情
    diary: undefined,

    // 右上角工具栏
    toolbar: toolbar,

    // 图片预览模式
    previewMode: false,

    // 当前预览索引
    previewIndex: 0,

  },

  // 加载blog
  getDiary(params) {
    console.log("Loading diary data...", params);

    var id = params["id"], diary;
    app.getDiaryList(list => {
      if (typeof id === 'undefined') {
        diary = list[0];
      } else {
        diary = list[id];
      }
    });

    this.setData({
      diary: diary,
    });
  },

  // 过滤出预览图片列表
  getMediaList() {
    if (typeof this.data.diary !== 'undefined' &&
      this.data.diary.list.length) {
      this.setData({
        mediaList: this.data.diary.list.filter(
          content => content.type === 'IMAGE'),
      })
    }
  },

  // 进入预览模式
  enterPreviewMode(event) {
    let url = event.target.dataset.src;
    let urls = this.data.mediaList.map(media => media.content);
    let previewIndex = urls.indexOf(url);

    this.setData({ previewMode: true, previewIndex });
  },

  // 退出预览模式
  leavePreviewMode() {
    this.setData({ previewMode: false, previewIndex: 0 });
  },

  onLoad: function (params) {
    this.getDiary(params);
    this.getMediaList();
  },

  onHide: function () {
  },
})