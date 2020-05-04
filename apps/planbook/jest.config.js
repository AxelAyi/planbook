module.exports = {
  name: 'planbook',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/planbook',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
