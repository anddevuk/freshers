let theWheel = new Winwheel({
    'numSegments'       : 8,                 // Specify number of segments.
    'outerRadius'       : 200,               // Set outer radius so wheel fits inside the background.
    'drawText'          : true,              // Code drawn text can be used with segment images.
    'textFontSize'      : 16,
    'textOrientation'   : 'curved',
    'textAlignment'     : 'inner',
    'textMargin'        : 90,
    'textFontFamily'    : 'monospace',
    'textStrokeStyle'   : 'black',
    'textLineWidth'     : 3,
    'textFillStyle'     : 'white',
    'drawMode'          : 'segmentImage',    // Must be segmentImage to draw wheel using one image per segemnt.
    'segments'          :                    // Define segments including image and text.
    [
       {'image' : 'a-seg.png',  'text' : 'Pint'},
       {'image' : 'b-seg.png',   'text' : 'Gift'},
       {'image' : 'c-seg.png',  'text' : 'Tee'},
       {'image' : 'd-seg.png',  'text' : 'Gift'},
       {'image' : 'e-seg.png', 'text' : 'Shot'},
       {'image' : 'f-seg.png', 'text' : 'Gift'},
       {'image' : 'g-seg.png',  'text' : 'Pint'},
       {'image' : 'h-seg.png', 'text' : 'Shot'}
    ],
    'animation' :           // Specify the animation to use.
    {
        'type'     : 'spinToStop',
        'duration' : 5,     // Duration in seconds.
        'spins'    : 8,     // Number of complete spins.
        'callbackFinished' : alertPrize
    }
});

// Vars used by the code in this page to do power controls.
let wheelPower    = 0;
let wheelSpinning = false;

// -------------------------------------------------------
// Click handler for spin button.
// -------------------------------------------------------
function startSpin()
{
    // Ensure that spinning can't be clicked again while already running.
    if (wheelSpinning == false) {
        // Disable the spin button so can't click again while wheel is spinning.
        document.getElementById('spin_button').src       = "spin_off.png";
        document.getElementById('spin_button').className = "";

        // Begin the spin animation by calling startAnimation on the wheel object.
        theWheel.startAnimation();

        // Set to true so that power can't be changed and spin button re-enabled during
        // the current animation. The user will have to reset before spinning again.
        wheelSpinning = true;
    }
}

// -------------------------------------------------------
// Function for reset button.
// -------------------------------------------------------
function resetWheel()
{
    theWheel.stopAnimation(false);  // Stop the animation, false as param so does not call callback function.
    theWheel.rotationAngle = 0;     // Re-set the wheel angle to 0 degrees.
    theWheel.draw();                // Call draw to render changes to the wheel.

    wheelSpinning = false;          // Reset to false to power buttons and spin can be clicked again.
}

// -------------------------------------------------------
// Called when the spin animation has finished by the callback feature of the wheel because I specified callback in the parameters.
// note the indicated segment is passed in as a parmeter as 99% of the time you will want to know this to inform the user of their prize.
// -------------------------------------------------------
function alertPrize(indicatedSegment)
{
    // Do basic alert of the segment text. You would probably want to do something more interesting with this information.
    alert('You Have Won a Free a ' + indicatedSegment.text + ' Please show this to recieve your prize!');
}
