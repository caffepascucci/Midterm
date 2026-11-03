/* =========================================================================
   공학수학2 중간고사 대비 데이터
   - SECTIONS : 섹션별 핵심정리 + 예제(조교 연습문제 기반)
   - EXAMS    : 모의고사 3회 (단답 10 + 서술형 3)
   수식은 LaTeX( \( \) / \[ \] )로 작성 -> MathJax 렌더링
   ========================================================================= */

/* ---------------------------- 섹션별 정리 ---------------------------- */
const SECTIONS = [
  {
    code:"11.5", title:"공간의 직선과 평면",
    key:[
      {label:"직선 (벡터/매개변수/대칭형)",
       html:`점 \\(P_0=(x_0,y_0,z_0)\\)를 지나고 방향벡터 \\(\\mathbf v=\\langle a,b,c\\rangle\\)인 직선:
       \\[\\mathbf r(t)=\\mathbf r_0+t\\mathbf v,\\quad
       \\begin{cases}x=x_0+at\\\\y=y_0+bt\\\\z=z_0+ct\\end{cases},\\quad
       \\frac{x-x_0}{a}=\\frac{y-y_0}{b}=\\frac{z-z_0}{c}\\]`},
      {label:"평면",
       html:`점 \\(P_0\\)를 지나고 법선 \\(\\mathbf n=\\langle a,b,c\\rangle\\)인 평면:
       \\[a(x-x_0)+b(y-y_0)+c(z-z_0)=0.\\]
       두 평면의 사잇각 = 법선벡터 사잇각. 평행이면 \\(\\mathbf n_1\\parallel\\mathbf n_2\\).`},
      {label:"교선·거리",
       html:`두 평면의 교선 방향 \\(=\\mathbf n_1\\times\\mathbf n_2\\). 점 \\((x_1,y_1,z_1)\\)에서 평면 \\(ax+by+cz+d=0\\)까지 거리
       \\[D=\\frac{|ax_1+by_1+cz_1+d|}{\\sqrt{a^2+b^2+c^2}}.\\]`}
    ],
    probs:[
      {src:"Week 1 · 유형", q:`직선 \\(L:\\ \\langle1,-1,2\\rangle+t\\langle2,1,-1\\rangle\\)과 평면족 \\(\\Pi_\\lambda:\\ x+\\lambda y+z=3\\)에 대하여 \\(\\lambda=2\\)일 때 \\(L\\)이 \\(\\Pi_2\\)와 만나는 점을 구하고, \\(L\\)이 평면과 평행하게 되는 \\(\\lambda\\)를 구하라.`,
       sol:`직선 위 점 \\((1+2t,-1+t,2-t)\\)을 \\(x+2y+z=3\\)에 대입:
       \\((1+2t)+2(-1+t)+(2-t)=3\\Rightarrow 1-2+2+3t=3\\Rightarrow 3t=2,\\ t=\\tfrac23.\\)
       교점 \\(\\left(\\tfrac73,-\\tfrac13,\\tfrac43\\right)\\).<br>
       평행 조건: 방향 \\(\\mathbf v=\\langle2,1,-1\\rangle\\)이 법선 \\(\\mathbf n=\\langle1,\\lambda,1\\rangle\\)과 수직, 즉 \\(\\mathbf v\\cdot\\mathbf n=2+\\lambda-1=0\\Rightarrow\\) <span class="ans">\\(\\lambda=-1\\)</span> (직선이 평면 위에 있지 않은 한 평행).`}
    ]
  },
  {
    code:"11.6", title:"이차곡면 (Quadric Surfaces)",
    key:[
      {label:"표준형 분류",
       html:`<ul class="clean">
       <li>타원면 \\(\\frac{x^2}{a^2}+\\frac{y^2}{b^2}+\\frac{z^2}{c^2}=1\\)</li>
       <li>타원포물면 \\(z=\\frac{x^2}{a^2}+\\frac{y^2}{b^2}\\)</li>
       <li>쌍곡포물면(안장) \\(z=\\frac{x^2}{a^2}-\\frac{y^2}{b^2}\\)</li>
       <li>원뿔 \\(z^2=\\frac{x^2}{a^2}+\\frac{y^2}{b^2}\\)</li>
       <li>한겹/두겹 쌍곡면 \\(\\pm\\frac{x^2}{a^2}\\pm\\frac{y^2}{b^2}-\\frac{z^2}{c^2}=1\\)</li></ul>`},
      {label:"트레이스(trace)",
       html:`좌표평면 \\(x=k,\\ y=k,\\ z=k\\)로 자른 단면 곡선을 그려 곡면을 식별. 완전제곱으로 정리해 중심을 찾는다.`}
    ],
    probs:[
      {src:"Week 1 · 유형", q:`곡면 \\(S:\\ x^2+4y^2-z^2-2x+8y-4z=0\\)에 대하여 완전제곱으로 표준형을 구하고, \\(z=k\\)로 자른 단면의 넓이 \\(A(k)\\)를 구하라.`,
       sol:`완전제곱: \\((x-1)^2+4(y+1)^2-(z+2)^2=1-4+4=1\\).
       즉 \\((x-1)^2+4(y+1)^2-(z+2)^2=1\\) — <b>한 겹 쌍곡면</b>.<br>
       \\(z=k\\) 단면: \\((x-1)^2+4(y+1)^2=1+(k+2)^2\\equiv R^2\\) 꼴의 타원
       \\(\\frac{(x-1)^2}{R^2}+\\frac{(y+1)^2}{R^2/4}=1\\), 반장축 \\(R,\\ R/2\\).
       넓이 <span class="ans">\\(A(k)=\\pi\\cdot R\\cdot\\frac R2=\\frac{\\pi}{2}\\bigl(1+(k+2)^2\\bigr)\\)</span>.`}
    ]
  },
  {
    code:"12.1–12.2", title:"벡터함수 · 도함수와 적분",
    key:[
      {label:"극한·연속",
       html:`\\(\\mathbf r(t)=\\langle f,g,h\\rangle\\)의 극한은 성분별. 연속은 성분이 모두 연속.`},
      {label:"도함수·접선",
       html:`\\(\\mathbf r'(t)=\\langle f',g',h'\\rangle\\). 접선벡터 \\(\\mathbf r'(t_0)\\), 단위접선 \\(\\mathbf T=\\dfrac{\\mathbf r'}{|\\mathbf r'|}\\).
       접선: \\(\\mathbf r(t_0)+s\\,\\mathbf r'(t_0)\\).`},
      {label:"미분법칙",
       html:`\\(\\frac{d}{dt}(\\mathbf u\\cdot\\mathbf v)=\\mathbf u'\\cdot\\mathbf v+\\mathbf u\\cdot\\mathbf v',\\quad
       \\frac{d}{dt}(\\mathbf u\\times\\mathbf v)=\\mathbf u'\\times\\mathbf v+\\mathbf u\\times\\mathbf v'.\\)`}
    ],
    probs:[
      {src:"Week 2", q:`\\(\\mathbf r(t)=\\left\\langle t^2,\\ t^3-1,\\ t+1\\right\\rangle,\\ t\\ne1\\)에서 \\(\\displaystyle\\lim_{t\\to1}\\mathbf r(t)\\)를 구하라.`,
       sol:`성분별 극한: \\(\\langle 1,\\ 0,\\ 2\\rangle\\). <span class="ans">\\(\\lim=\\langle1,0,2\\rangle\\)</span>.`},
      {src:"Week 2", q:`곡선 \\(\\mathbf r(t)=\\langle t^2,\\ t^3-3t,\\ 2t\\rangle\\)가 점 \\(P=\\mathbf r(1)\\)를 지난다. \\(t=-3\\)과 \\(t=1\\)에서의 접선이 서로 수직임을 보이거나 접선벡터를 구하라.`,
       sol:`\\(\\mathbf r'(t)=\\langle 2t,\\ 3t^2-3,\\ 2\\rangle\\).
       \\(\\mathbf r'(1)=\\langle2,0,2\\rangle\\), \\(\\mathbf r'(-3)=\\langle-6,24,2\\rangle\\).
       \\(\\mathbf r'(1)\\cdot\\mathbf r'(-3)=-12+0+4=-8\\ne0\\) 이므로 수직은 아니며, 두 접선벡터는 위와 같다. (\\(P=\\langle1,-2,2\\rangle\\))`},
      {src:"퀴즈 Q3", q:`\\(\\mathbf r(t)=\\langle 2\\cos t,\\ \\sin t,\\ t\\rangle\\)의 \\(t=\\tfrac\\pi2\\) (점 \\((0,1,\\tfrac\\pi2)\\))에서의 접선의 매개변수방정식을 구하라.`,
       sol:`\\(\\mathbf r'(t)=\\langle -2\\sin t,\\ \\cos t,\\ 1\\rangle\\), \\(\\mathbf r'(\\tfrac\\pi2)=\\langle-2,0,1\\rangle\\).
       <span class="ans">\\(x=0-2s,\\ y=1,\\ z=\\tfrac\\pi2+s\\)</span>.`}
    ]
  },
  {
    code:"12.3", title:"호의 길이 · 곡률 (Arc Length & Curvature)",
    key:[
      {label:"호의 길이",
       html:`\\[L=\\int_a^b|\\mathbf r'(t)|\\,dt,\\qquad s(t)=\\int_{t_0}^{t}|\\mathbf r'(u)|\\,du.\\]`},
      {label:"호길이 재매개변수화",
       html:`\\(s\\)를 \\(t\\)로 표현한 뒤 역함수 \\(t(s)\\)를 \\(\\mathbf r\\)에 대입. 결과는 \\(|\\mathbf r'(s)|=1\\)을 만족.`},
      {label:"곡률",
       html:`\\[\\kappa=\\frac{|\\mathbf r'\\times\\mathbf r''|}{|\\mathbf r'|^3}
       =\\frac{|\\mathbf T'(t)|}{|\\mathbf r'(t)|}.\\]
       평면곡선 \\(y=f(x)\\): \\(\\kappa=\\dfrac{|f''|}{(1+f'^2)^{3/2}}\\).`},
      {label:"접촉평면 (osculating plane)",
       html:`단위접선 \\(\\mathbf T\\)와 주법선 \\(\\mathbf N\\)이 이루는 평면. 법선 = 종법선 \\(\\mathbf B=\\mathbf T\\times\\mathbf N\\) (\\(\\propto\\mathbf r'\\times\\mathbf r''\\)).`}
    ],
    probs:[
      {src:"Week 2 / 퀴즈 Q7", q:`나선 \\(\\mathbf r(t)=\\langle\\cos t,\\ \\sin t,\\ t\\rangle\\)를 점 \\((1,0,0)\\)에서 \\(t\\) 증가 방향으로 호의 길이 \\(s\\)로 재매개변수화하라.`,
       sol:`\\(\\mathbf r'=\\langle-\\sin t,\\cos t,1\\rangle,\\ |\\mathbf r'|=\\sqrt2\\).
       \\((1,0,0)=\\mathbf r(0)\\)이므로 \\(s=\\int_0^t\\sqrt2\\,du=\\sqrt2\\,t\\Rightarrow t=\\tfrac{s}{\\sqrt2}\\).
       <span class="ans">\\(\\mathbf r(s)=\\left\\langle\\cos\\tfrac{s}{\\sqrt2},\\ \\sin\\tfrac{s}{\\sqrt2},\\ \\tfrac{s}{\\sqrt2}\\right\\rangle\\)</span>.`},
      {src:"Week 2", q:`\\(\\mathbf r(t)=\\langle 3(t^2-1),\\ 3(t^2-1),\\ 4(t^2-1)\\rangle,\\ 1\\le t\\le2\\)에서 \\(t=1\\)인 점 \\(P\\)로부터 측정한 호의 길이가 \\(s=\\tfrac{5\\pi}{2}\\)가 되는 점… (속력 \\(|\\mathbf r'(t)|\\)과 \\(s(t)\\)를 구하라.)`,
       sol:`\\(\\mathbf r'(t)=\\langle6t,6t,8t\\rangle,\\ |\\mathbf r'|=\\sqrt{36+36+64}\\,|t|=10t\\) (t≥1).
       \\(s(t)=\\int_1^t10u\\,du=5(t^2-1)\\). (이 직선형 경로에서는 \\(s\\)로부터 \\(t^2=1+\\tfrac{s}{5}\\).)`},
      {src:"퀴즈 Q4", q:`\\(\\mathbf r(t)=\\langle t,\\ t^2,\\ 2t\\rangle\\)의 점 \\((1,1,2)\\) (즉 \\(t=1\\))에서의 곡률을 구하라.`,
       sol:`\\(\\mathbf r'=\\langle1,2t,2\\rangle,\\ \\mathbf r''=\\langle0,2,0\\rangle\\).
       \\(t=1:\\ \\mathbf r'=\\langle1,2,2\\rangle,\\ |\\mathbf r'|=3.\\)
       \\(\\mathbf r'\\times\\mathbf r''=\\langle 2\\cdot0-2\\cdot2,\\ 2\\cdot0-1\\cdot0,\\ 1\\cdot2-2\\cdot0\\rangle=\\langle-4,0,2\\rangle\\), 크기 \\(2\\sqrt5\\).
       <span class="ans">\\(\\kappa=\\dfrac{2\\sqrt5}{27}\\)</span>.`},
      {src:"퀴즈 Q5", q:`곡선 \\(\\mathbf r(t)=\\langle t,\\ t^2,\\ t^2+t\\rangle\\)의 점 \\(P(1,1,2)\\) (\\(t=1\\))에서 접촉평면의 방정식을 구하라.`,
       sol:`\\(\\mathbf r'=\\langle1,2t,2t+1\\rangle,\\ \\mathbf r''=\\langle0,2,2\\rangle\\).
       \\(t=1:\\ \\mathbf r'=\\langle1,2,3\\rangle,\\ \\mathbf r''=\\langle0,2,2\\rangle.\\)
       법선 \\(\\mathbf r'\\times\\mathbf r''=\\langle 2\\cdot2-3\\cdot2,\\ 3\\cdot0-1\\cdot2,\\ 1\\cdot2-2\\cdot0\\rangle=\\langle-2,-2,2\\rangle\\parallel\\langle1,1,-1\\rangle\\).
       평면: \\((x-1)+(y-1)-(z-2)=0\\Rightarrow\\) <span class="ans">\\(x+y-z=0\\)</span>.`}
    ]
  },
  {
    code:"13.1–13.2", title:"다변수함수 · 극한과 연속",
    key:[
      {label:"정의역·등위곡선",
       html:`\\(z=f(x,y)\\)의 정의역, 등위곡선 \\(f(x,y)=k\\). 온도·부피 등 실제 모델.`},
      {label:"극한의 존재",
       html:`서로 다른 경로로 접근해 극한이 다르면 극한은 <b>존재하지 않음</b>. 극좌표 \\(x=r\\cos\\theta,\\ y=r\\sin\\theta\\)로 \\(r\\to0\\) 분석이 유용.`}
    ],
    probs:[
      {src:"Week 3", q:`\\(g(x,y)=\\dfrac{(x+y)^2}{x^2+y^2}\\ ((x,y)\\ne(0,0))\\)의 등위곡선 \\(g=0,1,2\\)를 설명하고, \\((x,y)\\to(0,0)\\)에서 극한이 존재하는지 판정하라.`,
       sol:`경로 \\(y=0:\\ g=\\dfrac{x^2}{x^2}=1\\). 경로 \\(y=x:\\ g=\\dfrac{(2x)^2}{2x^2}=2\\). 값이 다르므로
       <span class="ans">극한 존재하지 않음</span>. (\\(g\\)는 원점에서의 방향 \\(\\theta\\)에만 의존: \\(g=1+\\sin2\\theta\\), 범위 \\([0,2]\\).)`},
      {src:"Week 3", q:`\\(h(x,y)=\\dfrac{x^2y}{x^4+y^2}\\ ((x,y)\\ne(0,0))\\)에서 \\((x,y)\\to(0,0)\\) 극한을 조사하라.`,
       sol:`직선 \\(y=mx:\\ h=\\dfrac{mx^3}{x^4+m^2x^2}\\to0\\). 그러나 포물선 \\(y=x^2:\\ h=\\dfrac{x^4}{2x^4}=\\tfrac12\\).
       경로에 따라 다르므로 <span class="ans">극한 존재하지 않음</span>.`},
      {src:"Week 3", q:`\\(f(x,y)=\\dfrac{xy^3}{x^2+y^2}\\ ((x,y)\\ne(0,0)),\\ f(0,0)=0\\)에서 \\(f_x(0,0),\\ f_y(0,0)\\)를 정의로 구하고, \\(f_{xy}(0,0)\\)와 \\(f_{yx}(0,0)\\)을 구하라.`,
       sol:`정의로: \\(f_x(0,0)=\\lim_{h\\to0}\\frac{f(h,0)-0}{h}=0,\\ f_y(0,0)=0\\).
       \\(x\\ne\\)축에서 \\(f_x(0,y)=\\dfrac{y\\,(y^2)(y^2)}{(y^2)^2}\\)… 실제로 \\(f_x(0,y)=y,\\ f_y(x,0)=0\\).
       따라서 \\(f_{xy}(0,0)=\\frac{\\partial}{\\partial y}f_x(0,y)\\big|_0=1\\), \\(f_{yx}(0,0)=\\frac{\\partial}{\\partial x}f_y(x,0)\\big|_0=0\\).
       <span class="ans">\\(f_{xy}(0,0)=1\\ne f_{yx}(0,0)=0\\)</span> — 혼합편도함수가 연속이 아니라 Clairaut 정리가 성립하지 않는 예.`}
    ]
  },
  {
    code:"13.3–13.4", title:"편도함수 · 선형근사와 미분",
    key:[
      {label:"선형근사 / 전미분",
       html:`\\[L(x,y)=f(a,b)+f_x(a,b)(x-a)+f_y(a,b)(y-b),\\]
       \\[dz=f_x\\,dx+f_y\\,dy.\\] 오차추정: \\(|\\Delta V|\\approx|dV|\\).`},
      {label:"접평면",
       html:`\\(z=f(x,y)\\)의 \\((a,b)\\) 접평면:
       \\(z=f(a,b)+f_x(a,b)(x-a)+f_y(a,b)(y-b)\\).`}
    ],
    probs:[
      {src:"퀴즈 Q1", q:`직육면체의 변이 70, 60, 40 cm로 측정되었고 각 측정의 오차가 0.1 cm 이내다. 부피 계산의 최대 오차를 전미분으로 추정하라.`,
       sol:`\\(V=xyz,\\ dV=yz\\,dx+xz\\,dy+xy\\,dz\\).
       \\(x,y,z=70,60,40,\\ |dx|,|dy|,|dz|\\le0.1\\).
       \\(yz=2400,\\ xz=2800,\\ xy=4200\\).
       \\(|dV|\\le(2400+2800+4200)(0.1)=9400(0.1)=\\) <span class="ans">\\(940\\ \\text{cm}^3\\)</span>.`},
      {src:"퀴즈 Q2", q:`\\(f(x,y,z)=\\sqrt{x^2+y^2+z^2}\\)의 \\((3,2,6)\\)에서의 선형근사로 \\(\\sqrt{(3.07)^2+(1.93)^2+6^2}\\)을 근사하라.`,
       sol:`\\(f(3,2,6)=\\sqrt{9+4+36}=7\\). \\(f_x=\\dfrac{x}{f}\\Rightarrow f_x=\\tfrac37,\\ f_y=\\tfrac27,\\ f_z=\\tfrac67\\).
       \\(\\Delta x=0.07,\\ \\Delta y=-0.07\\):
       \\(L=7+\\tfrac37(0.07)+\\tfrac27(-0.07)+0=7+\\tfrac17(0.07)=7+0.01=\\) <span class="ans">\\(7.01\\)</span>.`},
      {src:"Week 4", q:`\\(f(x,y)=\\dfrac{xy}{x+y}\\ (x,y>0)\\)의 \\((6,3)\\)에서의 선형화 \\(L(x,y)\\)를 구하고 \\(f(6.12,2.94)\\)를 근사하라.`,
       sol:`\\(f(6,3)=\\dfrac{18}{9}=2\\). \\(f_x=\\dfrac{y^2}{(x+y)^2}=\\dfrac{9}{81}=\\tfrac19,\\ f_y=\\dfrac{x^2}{(x+y)^2}=\\dfrac{36}{81}=\\tfrac49\\).
       \\(L=2+\\tfrac19(x-6)+\\tfrac49(y-3)\\).
       \\(f(6.12,2.94)\\approx2+\\tfrac19(0.12)+\\tfrac49(-0.06)=2+0.01\\overline3-0.02\\overline6\\approx\\) <span class="ans">\\(1.9867\\)</span>.`},
      {src:"Week 4", q:`\\(z=f(x,y)=x^2+2xy+3y^2\\)에서 \\((1,1)\\)의 전미분 \\(dz\\)를 쓰고, \\((1,1)\\to(1.02,0.99)\\)일 때 \\(\\Delta z\\)와 \\(dz\\)를 비교하라.`,
       sol:`\\(f_x=2x+2y=4,\\ f_y=2x+6y=8\\) at \\((1,1)\\). \\(dz=4\\,dx+8\\,dy\\).
       \\(dx=0.02,\\ dy=-0.01:\\ dz=0.08-0.08=0\\).
       실제 \\(f(1,1)=6,\\ f(1.02,0.99)=1.0404+2.0196+2.9403=6.0003\\Rightarrow\\Delta z=0.0003\\).
       <span class="ans">\\(dz=0,\\ \\Delta z\\approx0.0003\\)</span> (근사값이 매우 가깝다).`}
    ]
  },
  {
    code:"13.5", title:"연쇄법칙 (Chain Rule)",
    key:[
      {label:"일반 연쇄법칙",
       html:`\\(w=f(x,y,z),\\ x=x(s,t)\\) 등일 때
       \\[\\frac{\\partial w}{\\partial s}=f_x\\frac{\\partial x}{\\partial s}+f_y\\frac{\\partial y}{\\partial s}+f_z\\frac{\\partial z}{\\partial s}.\\]
       나무그림(tree diagram)으로 경로를 빠짐없이 더한다.`},
      {label:"음함수 미분",
       html:`\\(F(x,y,z)=0\\)이면 \\(\\dfrac{\\partial z}{\\partial x}=-\\dfrac{F_x}{F_z},\\ \\dfrac{\\partial z}{\\partial y}=-\\dfrac{F_y}{F_z}.\\)`}
    ],
    probs:[
      {src:"퀴즈 Q8", q:`\\(u=x^4y+y^2z^3\\), \\(x=rse^t,\\ y=rs^2e^{-t},\\ z=r^2s\\sin t\\)일 때 \\(r=2,\\ s=1,\\ t=0\\)에서 \\(\\dfrac{\\partial u}{\\partial s}\\)를 구하라.`,
       sol:`\\(r=2,s=1,t=0\\Rightarrow x=2,\\ y=2,\\ z=0\\).
       \\(u_x=4x^3y=4\\cdot8\\cdot2=64,\\ u_y=x^4+2yz^3=16+0=16,\\ u_z=3y^2z^2=0.\\)
       \\(x_s=re^t=2,\\ y_s=2rse^{-t}=4,\\ z_s=r^2\\sin t=0.\\)
       \\(u_s=64\\cdot2+16\\cdot4+0=128+64=\\) <span class="ans">\\(192\\)</span>.`},
      {src:"Week 4", q:`\\(w=f(x,y,z)=x^2e^z+xy\\), 경로 \\(x=e^{2u},\\ y=1-u,\\ z=3u\\)에서 \\(\\dfrac{dw}{du}\\Big|_{u=0}\\)를 구하라.`,
       sol:`\\(u=0\\Rightarrow x=1,y=1,z=0\\). \\(f_x=2xe^z+y=2+1=3,\\ f_y=x=1,\\ f_z=x^2e^z=1.\\)
       \\(x'=2e^{2u}=2,\\ y'=-1,\\ z'=3\\).
       \\(\\dfrac{dw}{du}=3\\cdot2+1\\cdot(-1)+1\\cdot3=6-1+3=\\) <span class="ans">\\(8\\)</span>.`},
      {src:"Week 4", q:`\\(S:\\ x^2+xy+2y^2+z^2=8\\)로 \\(z\\)가 음함수로 정의될 때 점 \\(P=(1,1,2)\\)에서 \\(z_x,\\ z_y\\)를 구하라.`,
       sol:`\\(F=x^2+xy+2y^2+z^2-8\\). \\(F_x=2x+y=3,\\ F_y=x+4y=5,\\ F_z=2z=4\\) at \\(P\\).
       \\(z_x=-\\tfrac{F_x}{F_z}=-\\tfrac34,\\ z_y=-\\tfrac{F_y}{F_z}=-\\tfrac54.\\)
       <span class="ans">\\(z_x=-\\tfrac34,\\ z_y=-\\tfrac54\\)</span>.`}
    ]
  },
  {
    code:"13.6", title:"방향도함수 · 기울기 (Gradient)",
    key:[
      {label:"기울기",
       html:`\\(\\nabla f=\\langle f_x,f_y,f_z\\rangle\\). 방향도함수 \\(D_{\\mathbf u}f=\\nabla f\\cdot\\mathbf u\\) (\\(\\mathbf u\\) 단위).`},
      {label:"성질",
       html:`\\(\\nabla f\\) 방향으로 최대 증가, 최대 증가율 \\(=|\\nabla f|\\). \\(\\nabla F\\)는 등위면 \\(F=c\\)에 수직 → 접평면 법선.`}
    ],
    probs:[
      {src:"Week 6", q:`\\(F(x,y,z)=x^2+xy+2y^2+z^2\\), \\(P=(1,1,2),\\ Q=(3,0,4)\\). \\(\\nabla F(P)\\)와 \\(P\\)에서 \\(Q\\)방향 방향도함수를 구하라.`,
       sol:`\\(\\nabla F=\\langle2x+y,\\ x+4y,\\ 2z\\rangle\\Rightarrow\\nabla F(P)=\\langle3,5,4\\rangle\\).
       \\(\\vec{PQ}=\\langle2,-1,2\\rangle,\\ |\\vec{PQ}|=3,\\ \\mathbf u=\\tfrac13\\langle2,-1,2\\rangle\\).
       \\(D_{\\mathbf u}F=\\tfrac13(6-5+8)=\\) <span class="ans">\\(3\\)</span>.`},
      {src:"Week 9", q:`\\(F(x,y,z)=x^2+xy+y^2+z^2\\), \\(P=(1,1,1),\\ Q=(3,0,3)\\). \\(P\\)에서 \\(Q\\)방향 방향도함수와 \\(F\\)가 \\(P\\)에서 가장 빨리 증가하는 방향을 구하라.`,
       sol:`\\(\\nabla F=\\langle2x+y,\\ x+2y,\\ 2z\\rangle\\Rightarrow\\nabla F(P)=\\langle3,3,2\\rangle\\).
       \\(\\vec{PQ}=\\langle2,-1,2\\rangle,\\ \\mathbf u=\\tfrac13\\langle2,-1,2\\rangle\\).
       \\(D_{\\mathbf u}F=\\tfrac13(6-3+4)=\\tfrac73\\). 최대 증가 방향 \\(\\langle3,3,2\\rangle\\), 최대율 \\(\\sqrt{22}\\).
       <span class="ans">\\(D_{\\mathbf u}F=\\tfrac73\\)</span>.`}
    ]
  },
  {
    code:"13.7", title:"극값 (Maxima/Minima)",
    key:[
      {label:"임계점·2계 판정",
       html:`\\(\\nabla f=0\\)인 점에서 \\(D=f_{xx}f_{yy}-f_{xy}^2\\).
       \\(D>0,\\ f_{xx}>0\\)→극소, \\(D>0,\\ f_{xx}<0\\)→극대, \\(D<0\\)→안장점, \\(D=0\\)→판정불가.`},
      {label:"닫힌영역 최대최소",
       html:`내부 임계점 + 경계 분석(경계는 1변수 최적화) 후 함숫값 비교.`}
    ],
    probs:[
      {src:"Week 6", q:`\\(f(x,y)=x^3+y^3-6xy\\)의 임계점을 찾고 분류하라 (영역 \\([0,3]\\times[0,3]\\) 내).`,
       sol:`\\(f_x=3x^2-6y=0,\\ f_y=3y^2-6x=0\\Rightarrow y=\\tfrac{x^2}{2},\\ x^4/4=2x\\Rightarrow x(x^3-8)=0\\).
       \\(x=0\\,(y=0)\\) 또는 \\(x=2\\,(y=2)\\).
       \\(f_{xx}=6x,\\ f_{yy}=6y,\\ f_{xy}=-6\\). \\(D=36xy-36\\).
       \\((0,0):D=-36<0\\)→<b>안장점</b>. \\((2,2):D=144-36>0,\\ f_{xx}=12>0\\)→<b>극소</b>, \\(f(2,2)=8+8-24=-8\\).
       <span class="ans">\\((2,2)\\) 극소값 \\(-8\\), \\((0,0)\\) 안장점</span>.`},
      {src:"Week 9", q:`\\(f(x,y)=x^3-3x+y^2\\)의 영역 \\([-2,2]\\times[-1,1]\\)에서 최대·최소를 구하라.`,
       sol:`내부: \\(f_x=3x^2-3=0\\Rightarrow x=\\pm1,\\ f_y=2y=0\\Rightarrow y=0\\). 임계점 \\((1,0),(-1,0)\\).
       \\(f(1,0)=1-3=-2,\\ f(-1,0)=-1+3=2\\).
       경계·꼭짓점 평가: \\(x=\\pm2,\\ y=\\pm1\\) 등에서 \\(f(2,\\pm1)=8-6+1=3,\\ f(-2,\\pm1)=-8+6+1=-1,\\ f(2,0)=2,\\ f(-2,0)=-2\\).
       <span class="ans">최대 \\(3\\) ((2,±1)), 최소 \\(-2\\) ((1,0),(-2,0))</span>.`}
    ]
  },
  {
    code:"13.8", title:"라그랑주 승수 (Lagrange Multipliers)",
    key:[
      {label:"방법",
       html:`\\(f\\)를 제약 \\(g=k\\) 아래 최적화: \\(\\nabla f=\\lambda\\nabla g,\\ g=k\\) 연립.`}
    ],
    probs:[
      {src:"Week 6", q:`\\(f(x,y)=xy\\)를 직선 \\(g(x,y)=x+y=2\\) 위에서 최대화하라.`,
       sol:`\\(\\nabla f=\\langle y,x\\rangle=\\lambda\\langle1,1\\rangle\\Rightarrow x=y\\). 제약 \\(2x=2\\Rightarrow x=y=1\\).
       <span class="ans">최대 \\(f(1,1)=1\\)</span>. (경계 없음: 직선상 위로 볼록한 포물선 \\(f(x,2-x)=1-(x-1)^2\\le1\\).)`},
      {src:"Week 9", q:`\\(f(x,y)=xy\\)를 타원 \\(x^2+4y^2=8\\) 위에서 최대·최소화하라.`,
       sol:`\\(\\nabla f=\\langle y,x\\rangle=\\lambda\\langle2x,8y\\rangle\\Rightarrow y=2\\lambda x,\\ x=8\\lambda y\\Rightarrow x=16\\lambda^2 x\\).
       \\(\\lambda^2=\\tfrac1{16}\\). \\(\\lambda=\\tfrac14:\\ y=\\tfrac x2,\\ x^2+4(\\tfrac{x^2}{4})=8\\Rightarrow2x^2=8\\Rightarrow x=\\pm2,\\ y=\\pm1\\), \\(f=2\\).
       \\(\\lambda=-\\tfrac14:\\ y=-\\tfrac x2\\Rightarrow f=-2\\).
       <span class="ans">최대 \\(2\\), 최소 \\(-2\\)</span>.`}
    ]
  },
  {
    code:"14.1–14.3", title:"이중적분 · 극좌표",
    key:[
      {label:"반복적분 / Fubini",
       html:`직사각형: \\(\\iint_R f\\,dA=\\int\\!\\int f\\,dx\\,dy\\). 일반영역은 Type I/II로 경계 설정.`},
      {label:"적분순서 교환",
       html:`영역을 그려 \\(dx\\,dy\\leftrightarrow dy\\,dx\\) 바꿔 적분가능한 형태로 만든다.`},
      {label:"극좌표",
       html:`\\(x=r\\cos\\theta,\\ y=r\\sin\\theta,\\ dA=r\\,dr\\,d\\theta\\). 원/부채꼴 영역에 유리.`}
    ],
    probs:[
      {src:"Week 7", q:`\\(\\displaystyle I=\\int_0^1\\!\\int_{\\sqrt x}^{1}e^{y^3}\\,dy\\,dx\\)의 적분순서를 바꿔 계산하라.`,
       sol:`영역: \\(0\\le x\\le1,\\ \\sqrt x\\le y\\le1\\) ⟺ \\(0\\le y\\le1,\\ 0\\le x\\le y^2\\).
       \\(I=\\int_0^1\\!\\int_0^{y^2}e^{y^3}dx\\,dy=\\int_0^1 y^2e^{y^3}dy=\\tfrac13(e-1)\\).
       <span class="ans">\\(I=\\tfrac13(e-1)\\)</span>.`},
      {src:"Week 9", q:`\\(\\displaystyle I=\\int_0^1\\!\\int_{\\sqrt[3]{x}}^{1}e^{y^4}\\,dy\\,dx\\)를 순서 바꿔 계산하라.`,
       sol:`영역: \\(0\\le y\\le1,\\ 0\\le x\\le y^3\\).
       \\(I=\\int_0^1\\!\\int_0^{y^3}e^{y^4}dx\\,dy=\\int_0^1 y^3e^{y^4}dy=\\tfrac14(e-1)\\).
       <span class="ans">\\(I=\\tfrac14(e-1)\\)</span>.`},
      {src:"Week 7 / 9", q:`\\(D=\\{(x,y):y\\ge0,\\ x^2+y^2\\le4x\\}\\) 위에서 \\(\\iint_D y\\,dA\\)를 극좌표로 구하라. (원 \\(x^2+y^2=4x\\Rightarrow r=4\\cos\\theta\\))`,
       sol:`\\(0\\le\\theta\\le\\tfrac\\pi2,\\ 0\\le r\\le4\\cos\\theta\\).
       \\(\\iint y\\,dA=\\int_0^{\\pi/2}\\!\\int_0^{4\\cos\\theta}(r\\sin\\theta)\\,r\\,dr\\,d\\theta
       =\\int_0^{\\pi/2}\\sin\\theta\\cdot\\tfrac{(4\\cos\\theta)^3}{3}d\\theta=\\tfrac{64}{3}\\int_0^{\\pi/2}\\cos^3\\theta\\sin\\theta\\,d\\theta.\\)
       \\(=\\tfrac{64}{3}\\cdot\\tfrac14=\\) <span class="ans">\\(\\tfrac{16}{3}\\)</span>.`}
    ]
  },
  {
    code:"14.6–14.9", title:"삼중적분 · 원기둥/구면좌표 · 변수변환",
    key:[
      {label:"삼중적분",
       html:`\\(\\iiint_E f\\,dV\\). 영역을 적절한 순서로 경계화.`},
      {label:"원기둥 / 구면좌표",
       html:`원기둥: \\(dV=r\\,dz\\,dr\\,d\\theta\\).
       구면: \\(x=\\rho\\sin\\phi\\cos\\theta,\\dots,\\ dV=\\rho^2\\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta\\).`},
      {label:"변수변환·야코비안",
       html:`\\[\\iint_R f\\,dA=\\iint_S f\\,|J|\\,du\\,dv,\\quad
       J=\\frac{\\partial(x,y)}{\\partial(u,v)}.\\]`}
    ],
    probs:[
      {src:"Week 8", q:`\\(\\displaystyle I=\\int_0^1\\!\\int_0^x\\!\\int_0^{1}\\! x\\,e^{z^3}\\,dz\\,dy\\,dx\\) 꼴에서 적분순서를 바꿔 계산하는 전략을 세워라. (지수 \\(e^{z^3}\\)는 \\(z\\)에 대해 먼저 적분 불가 → 순서 교환)`,
       sol:`\\(e^{z^3}\\)는 초등적분 불가이므로 <b>\\(z\\)를 바깥으로</b> 보내 영역 \\(0\\le z\\le1\\) 고정 후 \\(x,y\\)를 먼저 적분한다.
       핵심: 지수의 변수(여기선 \\(z\\))를 가장 바깥 변수로 만들어 \\(dz\\)를 마지막에 수행 → \\(\\int(\\cdots)e^{z^3}\\,dz\\)에서 앞의 다항식이 \\(z^2\\) 꼴이 되도록 유도.`},
      {src:"Week 8", q:`원뿔 \\(z=\\sqrt{x^2+y^2}\\)과 평면 \\(z=4\\)로 둘러싸인 영역 \\(E\\)에서 \\(\\iiint_E(x^2+y^2)\\,dV\\)를 원기둥좌표로 구하라.`,
       sol:`\\(E:\\ 0\\le\\theta\\le2\\pi,\\ 0\\le r\\le4,\\ r\\le z\\le4\\).
       \\(\\iiint r^2\\cdot r\\,dz\\,dr\\,d\\theta=\\int_0^{2\\pi}\\!\\int_0^4 r^3(4-r)\\,dr\\,d\\theta
       =2\\pi\\int_0^4(4r^3-r^4)\\,dr=2\\pi\\big(r^4-\\tfrac{r^5}{5}\\big)_0^4.\\)
       \\(=2\\pi(256-\\tfrac{1024}{5})=2\\pi\\cdot\\tfrac{256}{5}=\\) <span class="ans">\\(\\tfrac{512\\pi}{5}\\)</span>.`},
      {src:"Week 9", q:`구 \\(x^2+y^2+z^2=4z\\) (즉 \\(\\rho=4\\cos\\phi\\))와 원뿔 \\(z=\\sqrt{x^2+y^2}\\)로 둘러싸인 영역 \\(E\\)에서 \\(\\iiint_E(x^2+y^2+z^2)\\,dV\\)를 구면좌표로 구하라.`,
       sol:`원뿔 위쪽(안쪽): \\(0\\le\\phi\\le\\tfrac\\pi4,\\ 0\\le\\theta\\le2\\pi,\\ 0\\le\\rho\\le4\\cos\\phi\\).
       \\(\\iiint\\rho^2\\cdot\\rho^2\\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta
       =2\\pi\\int_0^{\\pi/4}\\sin\\phi\\,\\tfrac{(4\\cos\\phi)^5}{5}\\,d\\phi
       =\\tfrac{2\\pi\\cdot1024}{5}\\int_0^{\\pi/4}\\cos^5\\phi\\sin\\phi\\,d\\phi.\\)
       \\(\\int_0^{\\pi/4}\\cos^5\\phi\\sin\\phi\\,d\\phi=\\Big[-\\tfrac{\\cos^6\\phi}{6}\\Big]_0^{\\pi/4}=\\tfrac16\\big(1-\\tfrac18\\big)=\\tfrac{7}{48}\\).
       \\(=\\tfrac{2048\\pi}{5}\\cdot\\tfrac{7}{48}=\\) <span class="ans">\\(\\tfrac{896\\pi}{15}\\)</span>.`},
      {src:"Week 9", q:`영역 \\(R\\): \\(xy=1,\\ xy=2,\\ y=x,\\ y=2x\\)로 둘러싸인 곳에서 \\(\\displaystyle\\iint_R \\frac{y}{x}e^{xy}\\,dA\\)를 변수변환으로 구하라.`,
       sol:`\\(u=xy\\in[1,2],\\ v=\\tfrac yx\\in[1,2]\\). 야코비안: \\(\\dfrac{\\partial(u,v)}{\\partial(x,y)}=\\dfrac{2y}{x}=2v\\Rightarrow
       |J|=\\dfrac{\\partial(x,y)}{\\partial(u,v)}=\\dfrac{1}{2v}\\). 피적분 \\(\\tfrac yx e^{xy}=v\\,e^{u}\\).
       \\(\\iint v\\,e^{u}\\cdot\\tfrac{1}{2v}\\,du\\,dv=\\tfrac12\\int_1^2\\!\\int_1^2 e^{u}\\,du\\,dv=\\tfrac12(e^2-e)(1).\\)
       <span class="ans">\\(\\tfrac12(e^2-e)\\)</span>.`}
    ]
  }
];

/* ------------------------------ 모의고사 ------------------------------ */
/* 각 회차: short(단답 10, 각 2점) + essay(서술형 3, 각 serve as 가이드)
   단답의 answer는 자가채점용(정규화 비교), accept는 허용 표기 배열      */

const EXAMS = [
  {
    name:"모의고사 1회",
    short:[
      {q:`점 \\((1,-1,2)\\)를 지나고 두 평면 \\(x+y+z=2,\\ 2x-y+z=0\\)에 모두 평행한 직선의 방향벡터를 구하라. (교선 방향)`,
       answer:"<2,1,-3>", accept:["<2,1,-3>","(2,1,-3)","2,1,-3","⟨2,1,-3⟩"],
       sol:`방향 \\(=\\mathbf n_1\\times\\mathbf n_2=\\langle1,1,1\\rangle\\times\\langle2,-1,1\\rangle=\\langle1\\cdot1-1\\cdot(-1),\\,1\\cdot2-1\\cdot1,\\,1\\cdot(-1)-1\\cdot2\\rangle=\\langle2,1,-3\\rangle.\\) <span class="ans">\\(\\langle2,1,-3\\rangle\\)</span>`},
      {q:`\\(\\mathbf a=\\langle1,1,0\\rangle,\\ \\mathbf b=\\langle0,2,1\\rangle,\\ \\mathbf c=\\langle2,0,1\\rangle\\)로 만들어지는 평행육면체의 부피를 구하라. (퀴즈 Q6)`,
       answer:"4", accept:["4"],
       sol:`\\(\\mathbf a\\cdot(\\mathbf b\\times\\mathbf c)=\\det\\begin{pmatrix}1&1&0\\\\0&2&1\\\\2&0&1\\end{pmatrix}=1(2)-1(-2)+0=4.\\) <span class="ans">\\(V=4\\)</span>`},
      {q:`곡면 \\((x-1)^2+4(y+1)^2-(z+2)^2=1\\)은 어떤 이차곡면인가? (한글 또는 영어)`,
       answer:"한겹쌍곡면", accept:["한겹쌍곡면","일엽쌍곡면","한 겹 쌍곡면","hyperboloid of one sheet","one sheet hyperboloid","한겹 쌍곡면"],
       sol:`\\(+,+,-\\) 부호에 우변 \\(=1\\) → <span class="ans">한 겹 쌍곡면(hyperboloid of one sheet)</span>`},
      {q:`\\(\\mathbf r(t)=\\langle 2\\cos t,\\sin t,t\\rangle\\)의 \\(t=\\tfrac\\pi2\\)에서 접선벡터 \\(\\mathbf r'(\\tfrac\\pi2)\\)를 구하라. (퀴즈 Q3)`,
       answer:"<-2,0,1>", accept:["<-2,0,1>","(-2,0,1)","-2,0,1"],
       sol:`\\(\\mathbf r'=\\langle-2\\sin t,\\cos t,1\\rangle,\\ \\mathbf r'(\\tfrac\\pi2)=\\langle-2,0,1\\rangle.\\) <span class="ans">\\(\\langle-2,0,1\\rangle\\)</span>`},
      {q:`\\(\\mathbf r(t)=\\langle t,t^2,2t\\rangle\\)의 점 \\((1,1,2)\\)에서의 곡률 \\(\\kappa\\)를 구하라. (퀴즈 Q4)`,
       answer:"2sqrt5/27", accept:["2sqrt5/27","2√5/27","2 sqrt(5)/27","2*sqrt(5)/27","(2√5)/27"],
       sol:`\\(\\kappa=\\dfrac{|\\mathbf r'\\times\\mathbf r''|}{|\\mathbf r'|^3}=\\dfrac{2\\sqrt5}{27}.\\) <span class="ans">\\(\\tfrac{2\\sqrt5}{27}\\)</span>`},
      {q:`직육면체 변 70,60,40 cm, 각 측정오차 \\(\\le0.1\\) cm. 부피의 최대오차(전미분)를 \\(\\text{cm}^3\\) 단위로 구하라. (퀴즈 Q1)`,
       answer:"940", accept:["940","940cm3","940 cm^3"],
       sol:`\\(|dV|=(yz+xz+xy)(0.1)=(2400+2800+4200)(0.1)=940.\\) <span class="ans">\\(940\\ \\text{cm}^3\\)</span>`},
      {q:`\\(f=\\sqrt{x^2+y^2+z^2}\\)의 \\((3,2,6)\\) 선형근사로 \\(\\sqrt{3.07^2+1.93^2+6^2}\\)의 근삿값을 구하라. (퀴즈 Q2)`,
       answer:"7.01", accept:["7.01","7.010"],
       sol:`\\(L=7+\\tfrac37(.07)+\\tfrac27(-.07)=7.01.\\) <span class="ans">\\(7.01\\)</span>`},
      {q:`\\(u=x^4y+y^2z^3\\), \\(x=rse^t,y=rs^2e^{-t},z=r^2s\\sin t\\). \\(r=2,s=1,t=0\\)에서 \\(\\partial u/\\partial s\\)를 구하라. (퀴즈 Q8)`,
       answer:"192", accept:["192"],
       sol:`\\(u_s=64\\cdot2+16\\cdot4+0=192.\\) <span class="ans">\\(192\\)</span>`},
      {q:`\\(\\displaystyle\\int_0^1\\!\\int_{\\sqrt x}^1 e^{y^3}\\,dy\\,dx\\)의 값을 구하라. (순서 교환)`,
       answer:"(e-1)/3", accept:["(e-1)/3","(e−1)/3","(1/3)(e-1)","e/3-1/3"],
       sol:`순서교환 후 \\(\\int_0^1 y^2e^{y^3}dy=\\tfrac13(e-1).\\) <span class="ans">\\(\\tfrac{e-1}{3}\\)</span>`},
      {q:`원뿔 \\(z=\\sqrt{x^2+y^2}\\)와 \\(z=4\\) 사이에서 \\(\\iiint_E(x^2+y^2)\\,dV\\)를 구하라.`,
       answer:"512pi/5", accept:["512pi/5","512π/5","(512/5)pi","512/5 pi"],
       sol:`원기둥좌표: \\(2\\pi\\int_0^4 r^3(4-r)dr=\\tfrac{512\\pi}{5}.\\) <span class="ans">\\(\\tfrac{512\\pi}{5}\\)</span>`}
    ],
    essay:[
      {q:`나선 \\(\\mathbf r(t)=\\langle\\cos t,\\sin t,t\\rangle\\)를 점 \\((1,0,0)\\)에서 \\(t\\) 증가 방향으로 호의 길이 \\(s\\)에 대해 재매개변수화하고, 그 결과가 단위속력임을 확인하라. (퀴즈 Q7)`,
       sol:`\\(|\\mathbf r'|=\\sqrt{\\sin^2t+\\cos^2t+1}=\\sqrt2\\). \\((1,0,0)=\\mathbf r(0)\\)에서 \\(s(t)=\\int_0^t\\sqrt2\\,du=\\sqrt2 t\\Rightarrow t=s/\\sqrt2\\).
       \\(\\mathbf r(s)=\\langle\\cos\\tfrac{s}{\\sqrt2},\\sin\\tfrac{s}{\\sqrt2},\\tfrac{s}{\\sqrt2}\\rangle\\).
       검산: \\(\\mathbf r'(s)=\\langle-\\tfrac1{\\sqrt2}\\sin\\tfrac s{\\sqrt2},\\tfrac1{\\sqrt2}\\cos\\tfrac s{\\sqrt2},\\tfrac1{\\sqrt2}\\rangle,\\ |\\mathbf r'(s)|=\\sqrt{\\tfrac12+\\tfrac12}=1.\\) <span class="ans">단위속력 확인</span>`},
      {q:`\\(f(x,y)=x^3+y^3-6xy\\)의 모든 임계점을 구하고 2계 판정법으로 극대/극소/안장점을 분류하라. (Week 6)`,
       sol:`\\(f_x=3x^2-6y,\\ f_y=3y^2-6x\\). 연립 → \\((0,0),(2,2)\\).
       \\(D=f_{xx}f_{yy}-f_{xy}^2=36xy-36\\).
       \\((0,0):D=-36<0\\)→안장점. \\((2,2):D=108>0,f_{xx}=12>0\\)→극소, 값 \\(-8\\). <span class="ans">극소 \\(-8\\) at (2,2), 안장점 (0,0)</span>`},
      {q:`\\(\\mathbf r(t)=\\langle t,t^2,t^2+t\\rangle\\)의 점 \\(P(1,1,2)\\)에서 접촉평면의 방정식을 유도하라. (퀴즈 Q5)`,
       sol:`\\(\\mathbf r'(1)=\\langle1,2,3\\rangle,\\ \\mathbf r''(1)=\\langle0,2,2\\rangle\\).
       법선 \\(\\mathbf r'\\times\\mathbf r''=\\langle-2,-2,2\\rangle\\parallel\\langle1,1,-1\\rangle\\).
       \\((x-1)+(y-1)-(z-2)=0\\Rightarrow x+y-z=0.\\) <span class="ans">\\(x+y-z=0\\)</span>`}
    ]
  },
  {
    name:"모의고사 2회",
    short:[
      {q:`점 \\((2,0,1)\\)에서 평면 \\(2x-2y+z=5\\)까지의 거리를 구하라.`,
       answer:"0", accept:["0"],
       sol:`\\(D=\\dfrac{|2(2)-2(0)+1-5|}{\\sqrt{4+4+1}}=\\dfrac{|0|}{3}=0\\) (점이 평면 위). <span class="ans">\\(0\\)</span>`},
      {q:`\\(\\mathbf a=\\langle1,2,3\\rangle,\\ \\mathbf b=\\langle2,1,0\\rangle\\)의 외적 \\(\\mathbf a\\times\\mathbf b\\)를 구하라.`,
       answer:"<-3,6,-3>", accept:["<-3,6,-3>","(-3,6,-3)","-3,6,-3"],
       sol:`\\(\\mathbf a\\times\\mathbf b=\\langle2\\cdot0-3\\cdot1,\\,3\\cdot2-1\\cdot0,\\,1\\cdot1-2\\cdot2\\rangle=\\langle-3,6,-3\\rangle.\\) <span class="ans">\\(\\langle-3,6,-3\\rangle\\)</span>`},
      {q:`\\(\\displaystyle\\lim_{t\\to1}\\left\\langle t^2,\\ \\frac{t-1}{t^2-1},\\ e^t\\right\\rangle\\)를 구하라.`,
       answer:"<1,1/2,e>", accept:["<1,1/2,e>","(1,1/2,e)","1,1/2,e","<1,0.5,e>"],
       sol:`중간성분 \\(\\dfrac{t-1}{(t-1)(t+1)}\\to\\tfrac12\\). <span class="ans">\\(\\langle1,\\tfrac12,e\\rangle\\)</span>`},
      {q:`평면곡선 \\(y=x^2\\)의 원점 \\((0,0)\\)에서 곡률 \\(\\kappa\\)를 구하라.`,
       answer:"2", accept:["2"],
       sol:`\\(\\kappa=\\dfrac{|y''|}{(1+y'^2)^{3/2}}=\\dfrac{2}{(1+0)^{3/2}}=2.\\) <span class="ans">\\(2\\)</span>`},
      {q:`\\(f(x,y)=x^2+xy+2y^2\\)의 \\((1,1)\\)에서 \\(\\mathbf u=\\tfrac15\\langle3,4\\rangle\\) 방향 방향도함수를 구하라.`,
       answer:"29/5", accept:["29/5","5.8"],
       sol:`\\(\\nabla f=\\langle2x+y,\\ x+4y\\rangle=\\langle3,5\\rangle\\) at \\((1,1)\\). \\(D_{\\mathbf u}f=\\langle3,5\\rangle\\cdot\\tfrac15\\langle3,4\\rangle=\\tfrac15(9+20)=\\tfrac{29}{5}.\\) <span class="ans">\\(\\tfrac{29}{5}\\)</span>`},
      {q:`\\(z\\)가 \\(x^2+y^2+z^2=9\\)로 정의될 때 점 \\((1,2,2)\\)에서 \\(\\partial z/\\partial x\\)를 구하라.`,
       answer:"-1/2", accept:["-1/2","-0.5"],
       sol:`\\(z_x=-\\dfrac{F_x}{F_z}=-\\dfrac{2x}{2z}=-\\dfrac12.\\) <span class="ans">\\(-\\tfrac12\\)</span>`},
      {q:`\\(w=x^2e^z+xy\\), \\(x=e^{2u},y=1-u,z=3u\\). \\(u=0\\)에서 \\(dw/du\\)를 구하라. (Week 4)`,
       answer:"8", accept:["8"],
       sol:`\\(f_x=3,f_y=1,f_z=1;\\ x'=2,y'=-1,z'=3\\Rightarrow6-1+3=8.\\) <span class="ans">\\(8\\)</span>`},
      {q:`\\(\\displaystyle\\int_0^1\\!\\int_x^1 \\sin(y^2)\\,dy\\,dx\\)를 순서 바꿔 쓴 적분을 구하라(값 아닌 식의 결과 \\(\\int_0^1 y\\sin(y^2)dy\\)의 값).`,
       answer:"(1-cos1)/2", accept:["(1-cos1)/2","(1-cos(1))/2","(1−cos1)/2"],
       sol:`순서교환: \\(\\int_0^1\\int_0^y\\sin(y^2)dx\\,dy=\\int_0^1 y\\sin(y^2)dy=\\tfrac12(1-\\cos1).\\) <span class="ans">\\(\\tfrac{1-\\cos1}{2}\\)</span>`},
      {q:`반구 아래 영역에서 \\(D=\\{x^2+y^2\\le a^2\\}\\), \\(\\iint_D (x^2+y^2)\\,dA\\)를 \\(a\\)로 나타내라.`,
       answer:"pi a^4/2", accept:["pi a^4/2","πa^4/2","pi*a^4/2","(pi/2)a^4"],
       sol:`극좌표 \\(\\int_0^{2\\pi}\\int_0^a r^2\\cdot r\\,dr\\,d\\theta=2\\pi\\cdot\\tfrac{a^4}{4}=\\tfrac{\\pi a^4}{2}.\\) <span class="ans">\\(\\tfrac{\\pi a^4}{2}\\)</span>`},
      {q:`\\(f(x,y)=xy\\)를 \\(x^2+4y^2=8\\) 위에서의 최댓값을 구하라. (Week 9)`,
       answer:"2", accept:["2"],
       sol:`라그랑주 \\(\\Rightarrow(x,y)=(\\pm2,\\pm1),\\ f=2.\\) <span class="ans">\\(2\\)</span>`}
    ],
    essay:[
      {q:`\\(h(x,y)=\\dfrac{x^2y}{x^4+y^2}\\)의 \\((x,y)\\to(0,0)\\) 극한이 존재하지 않음을 서로 다른 경로로 보여라. (Week 3)`,
       sol:`직선 \\(y=mx\\): \\(h=\\dfrac{mx^3}{x^4+m^2x^2}=\\dfrac{mx}{x^2+m^2}\\to0\\).
       포물선 \\(y=x^2\\): \\(h=\\dfrac{x^2\\cdot x^2}{x^4+x^4}=\\dfrac12\\). 서로 다른 값 → <span class="ans">극한 없음</span>`},
      {q:`\\(F=x^2+xy+2y^2+z^2\\), \\(P=(1,1,2),\\ Q=(3,0,4)\\). \\(\\nabla F(P)\\), \\(P\\)에서 \\(Q\\)방향 방향도함수, 최대 증가율을 모두 구하라. (Week 6)`,
       sol:`\\(\\nabla F(P)=\\langle3,5,4\\rangle\\). \\(\\mathbf u=\\tfrac13\\langle2,-1,2\\rangle\\), \\(D_{\\mathbf u}F=\\tfrac13(6-5+8)=3\\). 최대증가율 \\(|\\nabla F|=\\sqrt{9+25+16}=\\sqrt{50}=5\\sqrt2\\). <span class="ans">\\(\\nabla F(P)=\\langle3,5,4\\rangle,\\ D_{\\mathbf u}F=3,\\ \\max=5\\sqrt2\\)</span>`},
      {q:`영역 \\(R\\): \\(xy=1,\\ xy=2,\\ y=x,\\ y=2x\\) 위에서 \\(\\displaystyle\\iint_R\\frac yx e^{xy}\\,dA\\)를 변수변환 \\(u=xy,\\ v=y/x\\)로 계산하라. (Week 9)`,
       sol:`\\(|J|=\\dfrac{1}{2v}\\), 피적분 \\(=v e^u\\). \\(\\iint v e^u\\tfrac1{2v}du\\,dv=\\tfrac12\\int_1^2\\!\\int_1^2 e^u\\,du\\,dv=\\tfrac12(e^2-e).\\) <span class="ans">\\(\\tfrac12(e^2-e)\\)</span>`}
    ]
  },
  {
    name:"모의고사 3회",
    short:[
      {q:`\\(\\mathbf a=\\langle1,0,1\\rangle,\\ \\mathbf b=\\langle3,1,0\\rangle,\\ \\mathbf c=\\langle2,-1,2\\rangle\\). \\(\\mathbf a\\cdot(\\mathbf b\\times\\mathbf c)\\)를 구하라. (Week 1)`,
       answer:"-3", accept:["-3"],
       sol:`\\(\\mathbf a\\cdot(\\mathbf b\\times\\mathbf c)=\\det\\begin{pmatrix}1&0&1\\\\3&1&0\\\\2&-1&2\\end{pmatrix}=1(1\\cdot2-0\\cdot(-1))-0+1(3\\cdot(-1)-1\\cdot2)=2+(-5)=-3.\\) <span class="ans">\\(-3\\)</span> (부호 주의!)`},
      {q:`\\(z=4x^2+y^2\\)은 어떤 이차곡면인가? (한글/영어)`,
       answer:"타원포물면", accept:["타원포물면","타원 포물면","elliptic paraboloid","포물면"],
       sol:`\\(z=\\) 양의 2차형식 → <span class="ans">타원포물면(elliptic paraboloid)</span>`},
      {q:`\\(\\mathbf r(t)=\\langle t^2,t^3-3t,2t\\rangle\\)의 \\(t=1\\)에서 접선벡터를 구하라. (Week 2)`,
       answer:"<2,0,2>", accept:["<2,0,2>","(2,0,2)","2,0,2"],
       sol:`\\(\\mathbf r'=\\langle2t,3t^2-3,2\\rangle\\Rightarrow\\mathbf r'(1)=\\langle2,0,2\\rangle.\\) <span class="ans">\\(\\langle2,0,2\\rangle\\)</span>`},
      {q:`\\(\\mathbf r(t)=\\langle3t,4t,0\\rangle\\)의 \\(t=0\\)에서 \\(t=2\\)까지 호의 길이를 구하라.`,
       answer:"10", accept:["10"],
       sol:`\\(|\\mathbf r'|=\\sqrt{9+16}=5,\\ L=\\int_0^2 5\\,dt=10.\\) <span class="ans">\\(10\\)</span>`},
      {q:`\\(f=x^3+y^3-6xy\\)의 극소값을 구하라. (Week 6)`,
       answer:"-8", accept:["-8"],
       sol:`임계점 \\((2,2)\\)에서 극소, \\(f=8+8-24=-8.\\) <span class="ans">\\(-8\\)</span>`},
      {q:`\\(f(x,y)=x^3-3x+y^2\\)의 \\([-2,2]\\times[-1,1]\\)에서 최댓값을 구하라. (Week 9)`,
       answer:"3", accept:["3"],
       sol:`꼭짓점 \\((2,\\pm1)\\)에서 \\(8-6+1=3\\)이 최대. <span class="ans">\\(3\\)</span>`},
      {q:`\\(u\\)가 \\((1,1)\\)에서 \\(f_x=2,f_y=-3\\)이고 \\(x=t^2,y=t\\)일 때 \\(t=1\\)에서 \\(du/dt\\)를 구하라.`,
       answer:"1", accept:["1"],
       sol:`\\(du/dt=f_x\\cdot2t+f_y\\cdot1=2\\cdot2+(-3)=4-3=1.\\) <span class="ans">\\(1\\)</span>`},
      {q:`\\(\\displaystyle\\int_0^1\\!\\int_{\\sqrt[3]{x}}^1 e^{y^4}\\,dy\\,dx\\)의 값을 구하라. (Week 9)`,
       answer:"(e-1)/4", accept:["(e-1)/4","(e−1)/4","(1/4)(e-1)"],
       sol:`순서교환: \\(\\int_0^1 y^3 e^{y^4}dy=\\tfrac14(e-1).\\) <span class="ans">\\(\\tfrac{e-1}{4}\\)</span>`},
      {q:`영역 \\(D=\\{y\\ge0,\\ x^2+y^2\\le4x\\}\\)에서 \\(\\iint_D y\\,dA\\)를 구하라. (Week 7/9)`,
       answer:"16/3", accept:["16/3"],
       sol:`극좌표 \\(r=4\\cos\\theta\\): \\(\\tfrac{64}{3}\\int_0^{\\pi/2}\\cos^3\\theta\\sin\\theta\\,d\\theta=\\tfrac{64}{3}\\cdot\\tfrac14=\\tfrac{16}{3}.\\) <span class="ans">\\(\\tfrac{16}{3}\\)</span>`},
      {q:`구 \\(\\rho=4\\cos\\phi\\)와 원뿔 \\(z=\\sqrt{x^2+y^2}\\)로 둘러싸인 영역에서 \\(\\iiint(x^2+y^2+z^2)dV\\)를 구하라. (Week 9)`,
       answer:"896pi/15", accept:["896pi/15","896π/15","(896/15)pi"],
       sol:`구면좌표 \\(0\\le\\phi\\le\\tfrac\\pi4,\\ 0\\le\\rho\\le4\\cos\\phi\\): 결과 \\(\\tfrac{896\\pi}{15}.\\) <span class="ans">\\(\\tfrac{896\\pi}{15}\\)</span>`}
    ],
    essay:[
      {q:`곡면 \\(S:\\ x^2+4y^2-z^2-2x+8y-4z=0\\)을 완전제곱으로 표준형으로 바꾸고 종류를 판정하라. 또 \\(z=0\\) 단면을 기술하라. (Week 1)`,
       sol:`\\((x-1)^2+4(y+1)^2-(z+2)^2=1\\) → 한 겹 쌍곡면.
       \\(z=0:\\ (x-1)^2+4(y+1)^2-4=1\\Rightarrow(x-1)^2+4(y+1)^2=5\\), 중심 \\((1,-1)\\)인 타원. <span class="ans">한 겹 쌍곡면, z=0 단면은 타원</span>`},
      {q:`\\(f(x,y)=\\dfrac{xy^3}{x^2+y^2}\\ ((x,y)\\ne0),\\ f(0,0)=0\\)에서 \\(f_{xy}(0,0)\\ne f_{yx}(0,0)\\)임을 보여라(혼합편도 비가환 예). (Week 3)`,
       sol:`정의로 \\(f_x(0,y)=y,\\ f_y(x,0)=0\\). 따라서 \\(f_{xy}(0,0)=\\partial_y f_x(0,y)|_0=1,\\ f_{yx}(0,0)=\\partial_x f_y(x,0)|_0=0\\). 혼합편도가 원점에서 연속이 아니므로 Clairaut 정리가 성립하지 않는다. <span class="ans">\\(f_{xy}=1\\ne f_{yx}=0\\)</span>`},
      {q:`원뿔 \\(z=\\sqrt{x^2+y^2}\\)와 평면 \\(z=4\\)로 둘러싸인 \\(E\\)에서 \\(\\iiint_E(x^2+y^2)\\,dV\\)를 원기둥좌표로 적분식 설정부터 완전히 계산하라. (Week 8)`,
       sol:`\\(0\\le\\theta\\le2\\pi,\\ 0\\le r\\le4,\\ r\\le z\\le4\\).
       \\(\\int_0^{2\\pi}\\!\\int_0^4\\!\\int_r^4 r^2\\cdot r\\,dz\\,dr\\,d\\theta=2\\pi\\int_0^4 r^3(4-r)\\,dr=2\\pi\\big[r^4-\\tfrac{r^5}{5}\\big]_0^4=2\\pi\\cdot\\tfrac{256}{5}=\\tfrac{512\\pi}{5}.\\) <span class="ans">\\(\\tfrac{512\\pi}{5}\\)</span>`}
    ]
  }
];
