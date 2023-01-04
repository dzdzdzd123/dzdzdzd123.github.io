define(function () {return '<div class="form-inline column-3">\n  <div class="form-group">\n    <div class="input-group input-group-sm">\n      <span class="input-group-addon">${lang.dialog_editor_viewercolor}</span>\n      <input data-field="viewer.color" type="text" class="form-control">\n    </div>\n  </div>\n  <div class="form-group">\n    <div class="input-group input-group-sm">\n      <span class="input-group-addon">${lang.dialog_editor_fontsize}</span>\n      <select data-field="viewer.shapeSize" class="form-control">\n        <option value="xlarge">${lang.dialog_editor_fontsize_xlarge}</option>\n        <option value="large">${lang.dialog_editor_fontsize_large}</option>\n        <option value="normal">${lang.dialog_editor_fontsize_normal}</option>\n        <option value="small">${lang.dialog_editor_fontsize_small}</option>\n      </select>\n    </div>\n  </div>\n  <div class="form-group">\n    <div class="input-group input-group-sm">\n      <span class="input-group-addon">${lang.dialog_editor_pageSize}</span>\n      <input data-field="viewer.pageSize" type="number" class="form-control">\n    </div>\n  </div>\n</div>\n<hr>\n<div class="form-inline column-3">\n  <div class="form-group">\n    <div class="input-group input-group-sm">\n      <span class="input-group-addon">${lang.dialog_editor_gridsorption}</span>\n      <span class="form-control">\n        <input data-field="editor.sorption.enableGrid" type="checkbox">\n      </span>\n    </div>\n  </div>\n  <div class="form-group">\n    <div class="input-group input-group-sm">\n      <span class="input-group-addon">${lang.dialog_editor_shapesorption}</span>\n      <span class="form-control">\n        <input data-field="editor.sorption.enableShape" type="checkbox">\n      </span>\n    </div>\n  </div>\n</div>\n<div class="form-inline">\n  <div class="input-group input-group-sm">\n    <span class="input-group-addon">${lang.dialog_editor_showgrid}</span>\n    <span class="form-control"><input data-field="editor.axis.showGrid" type="checkbox"></span>\n  </div>\n</div>\n<div class="form-inline column-3">\n  <div class="form-group">\n    <div class="input-group input-group-sm">\n      <span class="input-group-addon">${lang.dialog_editor_fillcontour}</span>\n      <span class="form-control"><input data-field="editor.fontLayer.fill" type="checkbox"></span>\n    </div>\n  </div>\n  <div class="form-group">\n    <div class="input-group input-group-sm">\n      <span class="input-group-addon">${lang.dialog_editor_contourstrokecolor}</span>\n      <input data-field="editor.fontLayer.strokeColor" type="text" class="form-control">\n    </div>\n  </div>\n  <div class="form-group">\n    <div class="input-group input-group-sm">\n      <span class="input-group-addon">${lang.dialog_editor_contourfillcolor}</span>\n      <input data-field="editor.fontLayer.fillColor" type="text" class="form-control">\n    </div>\n  </div>\n</div>\n<div class="form-inline column-3">\n  <div class="form-group">\n    <div class="input-group input-group-sm">\n      <span class="input-group-addon">${lang.dialog_editor_gapcolor}</span>\n      <input data-field="editor.axis.gapColor" type="text" class="form-control">\n    </div>\n  </div>\n  <div class="form-group">\n    <div class="input-group input-group-sm">\n      <span class="input-group-addon">${lang.dialog_editor_gap}</span>\n      <input data-field="editor.axis.graduation.gap" type="number" class="form-control">\n    </div>\n  </div>\n</div>\n<div class="form-inline column-3">\n  <div class="form-group">\n    <div class="input-group input-group-sm">\n      <span class="input-group-addon">${lang.dialog_editor_metricscolor}</span>\n      <input data-field="editor.axis.metricsColor" type="text" class="form-control">\n    </div>\n  </div>\n</div>\n<div class="form-inline column-3">\n  <div class="input-group input-group-sm">\n    <span class="input-group-addon">${lang.dialog_savesetting}</span>\n    <span class="form-control"><input data-field="saveSetting" type="checkbox"></span>\n    </div> <a href="#" id="setting-editor-default">${lang.dialog_resetsetting}</a>\n  </div>\n';});