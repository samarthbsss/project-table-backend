const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
    customer: {
        type: String
    },
    contactno: {
        type: Number
    },
    turbineframesr: {
        type: String
    },
    steamend: [{
        top: {
            ttldesc: String,
            hyd: String,
            date: Date
        },
        bottom: {
            ttldesc: String,
            date: Date
        }
    }],
    exhastendcasing : [{
        top: {
            ttldesc: String,
            hyd: String,
            date: Date
        },
        bottom: {
            ttldesc: String,
            date: Date
        }
    }],
    innercasing: [{
        top: {
            ttldesc: String,
            hyd: String,
            date: Date
        },
        bottom: {
            ttldesc: String,
            date: Date
        }
    }],
    stop$emergencyvalvebody1: {
        ttldesc: String,
        hyd: String,
        date: Date
    },
    stop$emergencyvalvebody2: {
        ttldesc: String,
        hyd: String,
        date: Date
    },
    stop$emergencyvalvebody3: {
        ttldesc: String,
        hyd: String,
        date: Date
    },
    stop$emergencyvalvebody4: {
        ttldesc: String,
        hyd: String,
        date: Date
    },
    nozzlechest: {
        ttldesc: String,
        hyd: String,
        date: Date
    },
    throttlevalve1: {
        ttldesc: String,
        hyd: String,
        date: Date
    },
    throttlevalve2: {
        ttldesc: String,
        hyd: String,
        date: Date
    },
    throttlevalve3: {
        ttldesc: String,
        hyd: String,
        date: Date
    },
    throttlevalve4: {
        ttldesc: String,
        hyd: String,
        date: Date
    },
    passoutmanifold: {
        ttldesc: String,
        hyd: String,
        date: Date
    },
    passinvalvecolumn: {
        ttldesc: String,
        hyd: String,
        date: Date
    },
    passinvalvecolumn1: {
        ttldesc: String,
        hyd: String,
        date: Date
    },
    passinvalvecolumn2: {
        ttldesc: String,
        hyd: String,
        date: Date
    },
    passinvalvecolumn3: {
        ttldesc: String,
        hyd: String,
        date: Date
    },
    passinvalvecolumn4: {
        ttldesc: String,
        hyd: String,
        date: Date
    },
    throttlevalvebox: {
        ttldesc: String,
        hyd: String,
        date: Date
    },
    power: {
        ttldesc: String,
        hyd: String,
        date: Date
    },
    rotor: {
        ttldesc: String,
        hyd: String,
    },
    nozzle: {
        ttldesc: String,
        hyd: String,
        date: Date
    },
    blades: {
        ttldesc: String,
        hyd: String,
        date: Date
    },
    gearboxbottom: {
        ttldesc: String,
        hyd: String,
        date: Date
    },
    controlvalvebody: {
        ttldesc: String,
        hyd: String,
        date: Date
    },
    baseplate: {
        ttldesc: String,
        date: Date
    },
    gearbox: {
        ttldesc: String,
        date: Date
    },
    hppedestal: {
        ttldesc: String,
        hyd: String,
        date: Date
    },
    lppedestal: {
        ttldesc: String,
        hyd: String,
        date: Date
    },
    guidebladecarrier1: [{
        top: {
            ttldesc: String,
            hyd: String
        },
        bottom: {
            ttldesc: String,

        },
      
    }],
    guidebladecarrier2: [{
        top: {
            ttldesc: String,

        },
        bottom: {
            ttldesc: String,

        }
    }],
    guidebladecarrier3: [{
        top: {
            ttldesc: String,

        },
        bottom: {
            ttldesc: String,

        }
    }],
    guidebladecarrier4: [{
        top: {
            ttldesc: String,

        },
        bottom: {
            ttldesc: String,

        }
    }],

});

const project = mongoose.model('project', projectSchema);

module.exports = project;