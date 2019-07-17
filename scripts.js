// Ace editor options
const editor = ace.edit('editor');
editor.setTheme('ace/theme/dracula');
editor.setKeyboardHandler("ace/keyboard/vim");
editor.getSession().setMode('ace/mode/javascript');
editor.getSession().setTabSize(2);
editor.setOptions({ fontSize: '14pt' });

// Tone.js
const volume = new Tone.Volume(-12).toMaster();
const polySynth = new Tone.PolySynth(2, Tone.FMSynth);
polySynth.connect(volume);

const synth = new Tone.Synth().toMaster();

function play() {
  Tone.context.latencyHint = 'fastest';
  Tone.Transport.bpm.value = 200;

  const sequence = new Tone.Sequence((time, note) => {
    eval(editor.getValue());
  },
  [0, 1, 2, 3],
  '4n'
  );

  Tone.Transport.start('+0.5');
  sequence.start();
}