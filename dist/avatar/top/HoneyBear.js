"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var lodash_1 = require("lodash");
var HoneyBear = /** @class */ (function (_super) {
    __extends(HoneyBear, _super);
    function HoneyBear() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mask1 = lodash_1.uniqueId('react-mask-');
        _this.path1 = lodash_1.uniqueId('react-path-');
        return _this;
    }
    HoneyBear.prototype.render = function () {
        var _a = this, mask1 = _a.mask1, path1 = _a.path1;
        return (React.createElement("g", { id: 'Top' },
            React.createElement("defs", null,
                React.createElement("rect", { id: path1, x: '0', y: '0', width: '264', height: '280' })),
            React.createElement("mask", { id: mask1, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path1 })),
            React.createElement("g", { id: 'Mask' }),
            React.createElement("g", { id: 'Top/Accesories/HoneyBear', mask: "url(#" + mask1 + ")" },
                React.createElement("g", { transform: 'translate(-1.000000, 0.000000)' },
                    React.createElement("polygon", { id: 'Bear-Body', fill: '#AE5B23', points: '0 233 15.4344065 197.22831 121 233 202.385415 208.507359 266 262.962284 266 280 0 280' }),
                    React.createElement("g", { id: 'honeybearlogo-mix', strokeWidth: '1', fill: 'none', transform: 'translate(5.000000, 8.095267)' },
                        React.createElement("path", { d: 'M22.1965318,246.900176 L181.308184,246.900176 C190.497414,246.900176 198.014907,239.391729 198.014907,230.216932 L198.014907,71.6873797 C213.503194,67.6696085 225,53.5686749 225,36.8702408 C225,17.0608823 208.821113,0.904733373 188.985397,0.904733373 C175.807727,0.904733373 164.243991,8.04406205 157.966231,18.6330536 C154.651101,17.950816 151.274969,17.6077733 147.890173,17.6092435 L106.122604,17.6092435 C92.6391847,17.6092435 80.8716155,21.3004283 70.8320657,27.6711399 C66.7432309,12.2942411 52.6696075,0.904733373 36.0161241,0.904733373 C16.1788865,0.904733373 0,17.0608823 0,36.8702408 C0,56.6795994 16.1788865,72.8342293 36.0161241,72.8342293 C36.2534226,72.8342293 36.490721,72.8342293 36.7280195,72.8251152 C34.3038231,79.2898371 32.3715559,85.9280022 30.9476726,92.683082 L3.63401278,221.039097 C1.07849103,233.051398 4.89504107,246.904733 22.2041375,246.904733 L22.1965318,246.900176 Z M36.0161241,21.1044765 C44.7355695,21.1044765 51.8040767,28.1630496 51.8040767,36.8702408 C51.8040767,45.577432 44.7355695,52.6360051 36.0161241,52.6360051 C27.2966787,52.6360051 20.2281716,45.577432 20.2281716,36.8702408 C20.2457457,28.1703292 27.3039685,21.122026 36.0161241,21.1044765 L36.0161241,21.1044765 Z M195.254031,51.3326979 C191.79624,41.4592991 185.352371,32.9023719 176.813204,26.8448006 C180.971014,21.8054336 187.810152,19.8482799 194.009727,21.9236775 C200.209302,23.9990752 204.485233,29.6771595 204.761251,36.2008148 C205.037269,42.72447 201.256203,48.7424908 195.254031,51.3326979 L195.254031,51.3326979 Z', id: 'Shape', fill: '#AE5B23' }),
                        React.createElement("path", { d: 'M103.5,54.9047334 C110.403559,54.9047334 116,60.501174 116,67.4047334 C116,74.3082927 110.403559,79.9047334 103.5,79.9047334 C96.5964406,79.9047334 91,74.3082927 91,67.4047334 C91.0165587,60.5080445 96.6033111,54.9212921 103.5,54.9047334 Z', id: 'Path', fill: '#3C2328' }),
                        React.createElement("path", { d: 'M166.5,54.9047334 C173.403559,54.9047334 179,60.501174 179,67.4047334 C179,74.3082927 173.403559,79.9047334 166.5,79.9047334 C159.596441,79.9047334 154,74.3082927 154,67.4047334 C154.015734,60.5077019 159.602969,54.9204678 166.5,54.9047334 L166.5,54.9047334 Z', id: 'Path', fill: '#3C2328' }),
                        React.createElement("path", { d: 'M138.494577,88.9047334 L244.514563,88.9047334 C249.746974,88.9197647 253.98494,93.1497188 254,98.3722388 L254,126.776275 C254,137.190987 247.329576,144.160482 238.325494,148.517937 L238.325494,175.929155 C238.295596,180.253493 234.790309,183.751476 230.457775,183.78048 C226.424141,183.78048 222.640324,180.739688 222.640324,176.786658 L222.640324,163.103095 C222.580458,158.809115 219.075897,155.359515 214.773367,155.359515 C210.470837,155.359515 206.966276,158.809115 206.90641,163.103095 L206.90641,195.99382 C206.90641,200.364958 203.506459,204.068643 199.040214,204.068643 C194.656227,204.068643 191.170972,200.466825 191.170972,196.129135 L191.170972,173.128586 C191.170972,168.76809 187.748172,165.084171 183.303254,165.084171 C178.792835,165.084171 175.437058,168.771131 175.437058,173.168116 L175.437058,188.372075 C175.437058,192.606378 171.781197,196.112411 167.575433,196.112411 C163.236015,196.099051 159.721782,192.590782 159.709237,188.259566 L159.709237,170.505903 L144.781136,174.504544 C137.774068,176.382233 129,175.06405 129,164.179535 L129,98.3722388 C129.015896,93.1494728 133.2543,88.9197605 138.486961,88.9047334 L138.494577,88.9047334 Z M230.416646,199.229223 C233.592819,199.229223 236.456217,201.138967 237.671543,204.067879 C238.886869,206.996792 238.214765,210.36802 235.968654,212.60945 C233.722543,214.85088 230.344799,215.52106 227.410574,214.307463 C224.47635,213.093866 222.563544,210.235511 222.56416,207.065343 C222.572545,202.740451 226.083561,199.236752 230.416646,199.229223 Z', id: 'Shape', fill: '#EFD060' }),
                        React.createElement("path", { d: 'M208.107926,97.9047334 L239.420728,97.9047334 C244.866432,97.9047334 246.451737,103.597151 243.618458,107.372123 L228.391663,127.688061 C226.175564,130.643624 221.047525,130.643624 218.831426,127.688061 L203.603118,107.372123 C200.113329,102.717822 202.639531,97.9047334 208.107926,97.9047334 Z', id: 'Path', fill: '#3C2328' }))))));
    };
    HoneyBear.optionValue = 'HoneyBear';
    return HoneyBear;
}(React.Component));
exports.default = HoneyBear;
