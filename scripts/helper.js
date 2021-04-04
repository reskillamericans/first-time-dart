// Load this at the top of each markdown like this:
//
// <script type="text/javascript" src="scripts/helper.js" defer></script>
//
// - Includes the Dart embedding script to convert code blocks
//   prefixed with run-dartpad command.
// - Adds a style sheet needed to ensure IFrames are wide enough.
let style = document.createElement('style');
style.textContent = 'iframe { width: 100% }';
document.head.appendChild(style);

let scriptNode = document.createElement('script');
scriptNode.src = "https://dartpad.dev/inject_embed.dart.js";
scriptNode.type = "text/javascript";
document.body.appendChild(scriptNode);
