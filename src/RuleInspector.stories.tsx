import { DebugResult } from "./types";
import RuleInspector from "./RuleInspector";

const fakeState: DebugResult = {
  id: "___1v9igae",
  sequences: {
    ___866z2y0: {
      id: "___866z2y0",
      direction: "ltr",
      slot: "root",
      sourceMap:
        "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcb2xmZWRpYXNcXFdlYnN0b3JtUHJvamVjdHNcXG9mZmljZS11aS1mYWJyaWMtcmVhY3RcXHBhY2thZ2VzXFxyZWFjdC1tZW51XFxzcmNcXGNvbXBvbmVudHNcXE1lbnVJdGVtXFx1c2VNZW51SXRlbVN0eWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJDOlxcVXNlcnNcXG9sZmVkaWFzXFxXZWJzdG9ybVByb2plY3RzXFxvZmZpY2UtdWktZmFicmljLXJlYWN0XFxwYWNrYWdlc1xccmVhY3QtbWVudVxcc3JjXFxjb21wb25lbnRzXFxNZW51SXRlbVxcdXNlTWVudUl0ZW1TdHlsZXMudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtZXJnZUNsYXNzZXMsIG1ha2VTdHlsZXMgfSBmcm9tICdAZmx1ZW50dWkvcmVhY3QtbWFrZS1zdHlsZXMnO1xyXG5pbXBvcnQgeyBjcmVhdGVGb2N1c091dGxpbmVTdHlsZSB9IGZyb20gJ0BmbHVlbnR1aS9yZWFjdC10YWJzdGVyJztcclxuaW1wb3J0IHR5cGUgeyBNZW51SXRlbVN0YXRlIH0gZnJvbSAnLi9NZW51SXRlbS50eXBlcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICBmb2N1c0luZGljYXRvcjogdGhlbWUgPT4gY3JlYXRlRm9jdXNPdXRsaW5lU3R5bGUodGhlbWUpLFxyXG4gIHJvb3Q6IHRoZW1lID0+ICh7XHJcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLmJvcmRlclJhZGl1c01lZGl1bSxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgY29sb3I6IHRoZW1lLmNvbG9yTmV1dHJhbEZvcmVncm91bmQxLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvck5ldXRyYWxCYWNrZ3JvdW5kMSxcclxuICAgIHBhZGRpbmdSaWdodDogJzEwcHgnLFxyXG4gICAgcGFkZGluZ0xlZnQ6ICcxMHB4JyxcclxuICAgIGhlaWdodDogJzMycHgnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBmb250U2l6ZTogdGhlbWUuZm9udFNpemVCYXNlMzAwLFxyXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICBnYXA6ICc0cHgnLFxyXG5cclxuICAgICc6aG92ZXInOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JOZXV0cmFsQmFja2dyb3VuZDFIb3ZlcixcclxuICAgICAgY29sb3I6IHRoZW1lLmNvbG9yTmV1dHJhbEZvcmVncm91bmQySG92ZXIsXHJcbiAgICB9LFxyXG5cclxuICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcclxuICB9KSxcclxuICBjb250ZW50OiB7XHJcbiAgICBwYWRkaW5nTGVmdDogJzJweCcsXHJcbiAgICBwYWRkaW5nUmlnaHQ6ICcycHgnLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgZmxleEdyb3c6IDEsXHJcbiAgfSxcclxuICBzZWNvbmRhcnlDb250ZW50OiB0aGVtZSA9PiAoe1xyXG4gICAgcGFkZGluZ0xlZnQ6ICcycHgnLFxyXG4gICAgcGFkZGluZ1JpZ2h0OiAnMnB4JyxcclxuICAgIGNvbG9yOiB0aGVtZS5jb2xvck5ldXRyYWxGb3JlZ3JvdW5kMyxcclxuICAgICc6aG92ZXInOiB7XHJcbiAgICAgIGNvbG9yOiB0aGVtZS5jb2xvck5ldXRyYWxGb3JlZ3JvdW5kM0hvdmVyLFxyXG4gICAgfSxcclxuICAgICc6Zm9jdXMnOiB7XHJcbiAgICAgIGNvbG9yOiB0aGVtZS5jb2xvck5ldXRyYWxGb3JlZ3JvdW5kM0hvdmVyLFxyXG4gICAgfSxcclxuICB9KSxcclxuICBpY29uOiB7XHJcbiAgICB3aWR0aDogJzIwcHgnLFxyXG4gICAgaGVpZ2h0OiAnMjBweCcsXHJcbiAgfSxcclxuICBzdWJtZW51SW5kaWNhdG9yOiB7XHJcbiAgICB3aWR0aDogJzIwcHgnLFxyXG4gICAgaGVpZ2h0OiAnMjBweCcsXHJcbiAgfSxcclxuICBkaXNhYmxlZDogdGhlbWUgPT4gKHtcclxuICAgIGNvbG9yOiB0aGVtZS5jb2xvck5ldXRyYWxGb3JlZ3JvdW5kRGlzYWJsZWQsXHJcbiAgICAnOmhvdmVyJzoge1xyXG4gICAgICBjb2xvcjogdGhlbWUuY29sb3JOZXV0cmFsRm9yZWdyb3VuZERpc2FibGVkLFxyXG4gICAgfSxcclxuXHJcbiAgICAnOmZvY3VzJzoge1xyXG4gICAgICBjb2xvcjogdGhlbWUuY29sb3JOZXV0cmFsRm9yZWdyb3VuZERpc2FibGVkLFxyXG4gICAgfSxcclxuICB9KSxcclxufSk7XHJcblxyXG4vKiogQXBwbGllcyBzdHlsZSBjbGFzc25hbWVzIHRvIHNsb3RzICovXHJcbmV4cG9ydCBjb25zdCB1c2VNZW51SXRlbVN0eWxlcyA9IChzdGF0ZTogTWVudUl0ZW1TdGF0ZSkgPT4ge1xyXG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlcygpO1xyXG4gIHN0YXRlLnJvb3QuY2xhc3NOYW1lID0gbWVyZ2VDbGFzc2VzKFxyXG4gICAgc3R5bGVzLnJvb3QsXHJcbiAgICBzdHlsZXMuZm9jdXNJbmRpY2F0b3IsXHJcbiAgICBzdGF0ZS5kaXNhYmxlZCAmJiBzdHlsZXMuZGlzYWJsZWQsXHJcbiAgICBzdGF0ZS5yb290LmNsYXNzTmFtZSxcclxuICApO1xyXG4gIHN0YXRlLmNvbnRlbnQuY2xhc3NOYW1lID0gbWVyZ2VDbGFzc2VzKHN0eWxlcy5jb250ZW50LCBzdGF0ZS5jb250ZW50LmNsYXNzTmFtZSk7XHJcbiAgaWYgKHN0YXRlLnNlY29uZGFyeUNvbnRlbnQpIHtcclxuICAgIHN0YXRlLnNlY29uZGFyeUNvbnRlbnQuY2xhc3NOYW1lID0gbWVyZ2VDbGFzc2VzKFxyXG4gICAgICAhc3RhdGUuZGlzYWJsZWQgJiYgc3R5bGVzLnNlY29uZGFyeUNvbnRlbnQsXHJcbiAgICAgIHN0YXRlLnNlY29uZGFyeUNvbnRlbnQuY2xhc3NOYW1lLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGlmIChzdGF0ZS5pY29uKSB7XHJcbiAgICBzdGF0ZS5pY29uLmNsYXNzTmFtZSA9IG1lcmdlQ2xhc3NlcyhzdHlsZXMuaWNvbiwgc3RhdGUuaWNvbi5jbGFzc05hbWUpO1xyXG4gIH1cclxuXHJcbiAgaWYgKHN0YXRlLnN1Ym1lbnVJbmRpY2F0b3IpIHtcclxuICAgIHN0YXRlLnN1Ym1lbnVJbmRpY2F0b3IuY2xhc3NOYW1lID0gbWVyZ2VDbGFzc2VzKHN0eWxlcy5zdWJtZW51SW5kaWNhdG9yLCBzdGF0ZS5zdWJtZW51SW5kaWNhdG9yLmNsYXNzTmFtZSk7XHJcbiAgfVxyXG59O1xyXG4iXX0= */",
      sourceMapLine: 7,
      rules: [
        {
          cssRule: ".f1793yx0{border-radius:var(--borderRadiusMedium);}",
          className: "f1793yx0",
        },
        { cssRule: ".f2xf65p{position:relative;}", className: "f2xf65p" },
        {
          cssRule: ".fngnq0g{color:var(--colorNeutralForeground1);}",
          className: "fngnq0g",
        },
        {
          cssRule: ".fiwlvnx{background-color:var(--colorNeutralBackground1);}",
          className: "fiwlvnx",
        },
        { cssRule: ".f1wenbmy{padding-right:10px;}", className: "f1wenbmy" },
        { cssRule: ".fjwcoqi{padding-left:10px;}", className: "fjwcoqi" },
        { cssRule: ".f1xrd5f6{height:32px;}", className: "f1xrd5f6" },
      ],
    },
    ___1tkvjgu: {
      id: "___1tkvjgu",
      direction: "ltr",
      slot: "focusIndicator",
      sourceMap:
        "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcb2xmZWRpYXNcXFdlYnN0b3JtUHJvamVjdHNcXG9mZmljZS11aS1mYWJyaWMtcmVhY3RcXHBhY2thZ2VzXFxyZWFjdC1tZW51XFxzcmNcXGNvbXBvbmVudHNcXE1lbnVJdGVtXFx1c2VNZW51SXRlbVN0eWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJDOlxcVXNlcnNcXG9sZmVkaWFzXFxXZWJzdG9ybVByb2plY3RzXFxvZmZpY2UtdWktZmFicmljLXJlYWN0XFxwYWNrYWdlc1xccmVhY3QtbWVudVxcc3JjXFxjb21wb25lbnRzXFxNZW51SXRlbVxcdXNlTWVudUl0ZW1TdHlsZXMudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtZXJnZUNsYXNzZXMsIG1ha2VTdHlsZXMgfSBmcm9tICdAZmx1ZW50dWkvcmVhY3QtbWFrZS1zdHlsZXMnO1xyXG5pbXBvcnQgeyBjcmVhdGVGb2N1c091dGxpbmVTdHlsZSB9IGZyb20gJ0BmbHVlbnR1aS9yZWFjdC10YWJzdGVyJztcclxuaW1wb3J0IHR5cGUgeyBNZW51SXRlbVN0YXRlIH0gZnJvbSAnLi9NZW51SXRlbS50eXBlcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICBmb2N1c0luZGljYXRvcjogdGhlbWUgPT4gY3JlYXRlRm9jdXNPdXRsaW5lU3R5bGUodGhlbWUpLFxyXG4gIHJvb3Q6IHRoZW1lID0+ICh7XHJcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLmJvcmRlclJhZGl1c01lZGl1bSxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgY29sb3I6IHRoZW1lLmNvbG9yTmV1dHJhbEZvcmVncm91bmQxLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvck5ldXRyYWxCYWNrZ3JvdW5kMSxcclxuICAgIHBhZGRpbmdSaWdodDogJzEwcHgnLFxyXG4gICAgcGFkZGluZ0xlZnQ6ICcxMHB4JyxcclxuICAgIGhlaWdodDogJzMycHgnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBmb250U2l6ZTogdGhlbWUuZm9udFNpemVCYXNlMzAwLFxyXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICBnYXA6ICc0cHgnLFxyXG5cclxuICAgICc6aG92ZXInOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JOZXV0cmFsQmFja2dyb3VuZDFIb3ZlcixcclxuICAgICAgY29sb3I6IHRoZW1lLmNvbG9yTmV1dHJhbEZvcmVncm91bmQySG92ZXIsXHJcbiAgICB9LFxyXG5cclxuICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcclxuICB9KSxcclxuICBjb250ZW50OiB7XHJcbiAgICBwYWRkaW5nTGVmdDogJzJweCcsXHJcbiAgICBwYWRkaW5nUmlnaHQ6ICcycHgnLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgZmxleEdyb3c6IDEsXHJcbiAgfSxcclxuICBzZWNvbmRhcnlDb250ZW50OiB0aGVtZSA9PiAoe1xyXG4gICAgcGFkZGluZ0xlZnQ6ICcycHgnLFxyXG4gICAgcGFkZGluZ1JpZ2h0OiAnMnB4JyxcclxuICAgIGNvbG9yOiB0aGVtZS5jb2xvck5ldXRyYWxGb3JlZ3JvdW5kMyxcclxuICAgICc6aG92ZXInOiB7XHJcbiAgICAgIGNvbG9yOiB0aGVtZS5jb2xvck5ldXRyYWxGb3JlZ3JvdW5kM0hvdmVyLFxyXG4gICAgfSxcclxuICAgICc6Zm9jdXMnOiB7XHJcbiAgICAgIGNvbG9yOiB0aGVtZS5jb2xvck5ldXRyYWxGb3JlZ3JvdW5kM0hvdmVyLFxyXG4gICAgfSxcclxuICB9KSxcclxuICBpY29uOiB7XHJcbiAgICB3aWR0aDogJzIwcHgnLFxyXG4gICAgaGVpZ2h0OiAnMjBweCcsXHJcbiAgfSxcclxuICBzdWJtZW51SW5kaWNhdG9yOiB7XHJcbiAgICB3aWR0aDogJzIwcHgnLFxyXG4gICAgaGVpZ2h0OiAnMjBweCcsXHJcbiAgfSxcclxuICBkaXNhYmxlZDogdGhlbWUgPT4gKHtcclxuICAgIGNvbG9yOiB0aGVtZS5jb2xvck5ldXRyYWxGb3JlZ3JvdW5kRGlzYWJsZWQsXHJcbiAgICAnOmhvdmVyJzoge1xyXG4gICAgICBjb2xvcjogdGhlbWUuY29sb3JOZXV0cmFsRm9yZWdyb3VuZERpc2FibGVkLFxyXG4gICAgfSxcclxuXHJcbiAgICAnOmZvY3VzJzoge1xyXG4gICAgICBjb2xvcjogdGhlbWUuY29sb3JOZXV0cmFsRm9yZWdyb3VuZERpc2FibGVkLFxyXG4gICAgfSxcclxuICB9KSxcclxufSk7XHJcblxyXG4vKiogQXBwbGllcyBzdHlsZSBjbGFzc25hbWVzIHRvIHNsb3RzICovXHJcbmV4cG9ydCBjb25zdCB1c2VNZW51SXRlbVN0eWxlcyA9IChzdGF0ZTogTWVudUl0ZW1TdGF0ZSkgPT4ge1xyXG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlcygpO1xyXG4gIHN0YXRlLnJvb3QuY2xhc3NOYW1lID0gbWVyZ2VDbGFzc2VzKFxyXG4gICAgc3R5bGVzLnJvb3QsXHJcbiAgICBzdHlsZXMuZm9jdXNJbmRpY2F0b3IsXHJcbiAgICBzdGF0ZS5kaXNhYmxlZCAmJiBzdHlsZXMuZGlzYWJsZWQsXHJcbiAgICBzdGF0ZS5yb290LmNsYXNzTmFtZSxcclxuICApO1xyXG4gIHN0YXRlLmNvbnRlbnQuY2xhc3NOYW1lID0gbWVyZ2VDbGFzc2VzKHN0eWxlcy5jb250ZW50LCBzdGF0ZS5jb250ZW50LmNsYXNzTmFtZSk7XHJcbiAgaWYgKHN0YXRlLnNlY29uZGFyeUNvbnRlbnQpIHtcclxuICAgIHN0YXRlLnNlY29uZGFyeUNvbnRlbnQuY2xhc3NOYW1lID0gbWVyZ2VDbGFzc2VzKFxyXG4gICAgICAhc3RhdGUuZGlzYWJsZWQgJiYgc3R5bGVzLnNlY29uZGFyeUNvbnRlbnQsXHJcbiAgICAgIHN0YXRlLnNlY29uZGFyeUNvbnRlbnQuY2xhc3NOYW1lLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGlmIChzdGF0ZS5pY29uKSB7XHJcbiAgICBzdGF0ZS5pY29uLmNsYXNzTmFtZSA9IG1lcmdlQ2xhc3NlcyhzdHlsZXMuaWNvbiwgc3RhdGUuaWNvbi5jbGFzc05hbWUpO1xyXG4gIH1cclxuXHJcbiAgaWYgKHN0YXRlLnN1Ym1lbnVJbmRpY2F0b3IpIHtcclxuICAgIHN0YXRlLnN1Ym1lbnVJbmRpY2F0b3IuY2xhc3NOYW1lID0gbWVyZ2VDbGFzc2VzKHN0eWxlcy5zdWJtZW51SW5kaWNhdG9yLCBzdGF0ZS5zdWJtZW51SW5kaWNhdG9yLmNsYXNzTmFtZSk7XHJcbiAgfVxyXG59O1xyXG4iXX0= */",
      sourceMapLine: 6,
      rules: [
        {
          cssRule: ".f10m5ixv:focus-visible{outline-style:none;}",
          className: "f10m5ixv",
        },
        {
          cssRule:
            "[data-keyboard-nav] .fsjvn96:focus{border-top-color:transparent;}",
          className: "fsjvn96",
        },
        {
          cssRule:
            "[data-keyboard-nav] .fkmkv1s:focus{border-right-color:transparent;}",
          className: "fkmkv1s",
        },
        {
          cssRule:
            "[data-keyboard-nav] .fomsrpf:focus{border-bottom-color:transparent;}",
          className: "fomsrpf",
        },
        {
          cssRule:
            "[data-keyboard-nav] .fd38yfq:focus{border-left-color:transparent;}",
          className: "fd38yfq",
        },
      ],
    },
  },
};

export const Default = () => (
  <div style={{ border: "3px solid gray", width: 300 }}>
    <RuleInspector {...fakeState} />
  </div>
);

export default {
  title: "RuleInspector",
};
