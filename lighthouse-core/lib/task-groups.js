/**
 * @license Copyright 2017 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
'use strict';

const groups = {
  loading: 'Network request loading',
  parseHTML: 'Parsing HTML & CSS',
  styleLayout: 'Style & Layout',
  compositing: 'Compositing',
  painting: 'Paint',
  gpu: 'GPU',
  scripting: 'Script Evaluation',
  scriptParseCompile: 'Script Parsing & Compile',
  scriptGC: 'Garbage collection',
  other: 'Other',
  images: 'Images',
};

const taskToGroup = {
  'Animation': groups.painting,
  'Async Task': groups.other,
  'Frame Start': groups.painting,
  'Frame Start (main thread)': groups.painting,
  'Cancel Animation Frame': groups.scripting,
  'Cancel Idle Callback': groups.scripting,
  'Compile Script': groups.scriptParseCompile,
  'Composite Layers': groups.compositing,
  'Console Time': groups.scripting,
  'Image Decode': groups.images,
  'Draw Frame': groups.painting,
  'Embedder Callback': groups.scripting,
  'Evaluate Script': groups.scripting,
  'Event': groups.scripting,
  'Animation Frame Fired': groups.scripting,
  'Fire Idle Callback': groups.scripting,
  'Function Call': groups.scripting,
  'DOM GC': groups.scriptGC,
  'GC Event': groups.scriptGC,
  'GPU': groups.gpu,
  'Hit Test': groups.compositing,
  'Invalidate Layout': groups.styleLayout,
  'JS Frame': groups.scripting,
  'Input Latency': groups.scripting,
  'Layout': groups.styleLayout,
  'Major GC': groups.scriptGC,
  'DOMContentLoaded event': groups.scripting,
  'First paint': groups.painting,
  'FMP': groups.painting,
  'FMP candidate': groups.painting,
  'Load event': groups.scripting,
  'Minor GC': groups.scriptGC,
  'Paint': groups.painting,
  'Paint Image': groups.images,
  'Paint Setup': groups.painting,
  'Parse Stylesheet': groups.parseHTML,
  'Parse HTML': groups.parseHTML,
  'Parse Script': groups.scriptParseCompile,
  'Other': groups.other,
  'Rasterize Paint': groups.painting,
  'Recalculate Style': groups.styleLayout,
  'Request Animation Frame': groups.scripting,
  'Request Idle Callback': groups.scripting,
  'Request Main Thread Frame': groups.painting,
  'Image Resize': groups.images,
  'Finish Loading': groups.loading,
  'Receive Data': groups.loading,
  'Receive Response': groups.loading,
  'Send Request': groups.loading,
  'Run Microtasks': groups.scripting,
  'Schedule Style Recalculation': groups.styleLayout,
  'Scroll': groups.compositing,
  'Task': groups.other,
  'Timer Fired': groups.scripting,
  'Install Timer': groups.scripting,
  'Remove Timer': groups.scripting,
  'Timestamp': groups.scripting,
  'Update Layer': groups.compositing,
  'Update Layer Tree': groups.compositing,
  'User Timing': groups.scripting,
  'Create WebSocket': groups.scripting,
  'Destroy WebSocket': groups.scripting,
  'Receive WebSocket Handshake': groups.scripting,
  'Send WebSocket Handshake': groups.scripting,
  'XHR Load': groups.scripting,
  'XHR Ready State Change': groups.scripting,
};

module.exports = {
  groups,
  taskToGroup,
};
