function resolverSegundaMitad() {
    
    // --- Resolución del Problema 75 ---
    const solucion75 = document.getElementById('solucion75');
    if (solucion75) {
        solucion75.innerHTML = `
            <h3>Plan de Ataque: Un Problema de Dos Partes</h3>
            <p>Para encontrar la <span class="importante">fórmula molecular</span>, necesitamos dos piezas de información: la <span class="importante">fórmula empírica</span> (la proporción más simple de átomos) y la <span class="importante">masa molar</span> del compuesto. El problema nos da dos experimentos distintos para encontrar cada una.</p>
            <ul>
                <li><strong>Experimento 1 (Combustión):</strong> Nos dará la fórmula empírica.</li>
                <li><strong>Experimento 2 (Descenso del punto de congelación):</strong> Nos dará la masa molar.</li>
            </ul>

            <h3>Parte 1: Fórmula Empírica por Combustión</h3>
            <p>La idea es que todo el Carbono (C) del tiofeno acaba en el $CO_2$, todo el Hidrógeno (H) en el $H_2O$, y todo el Azufre (S) en el $SO_2$. Vamos a "recuperar" los moles de cada uno.</p>
            <div class="paso">
                <p><strong>Moles de Carbono (C):</strong></p>
                $$ 4.913 \\, g \\, CO_2 \\times \\frac{1 \\, mol \\, CO_2}{44.01 \\, g \\, CO_2} \\times \\frac{1 \\, mol \\, C}{1 \\, mol \\, CO_2} = \\mathbf{0.1116 \\, mol \\, C} $$
                <p><strong>Moles de Hidrógeno (H):</strong></p>
                $$ 1.005 \\, g \\, H_2O \\times \\frac{1 \\, mol \\, H_2O}{18.02 \\, g \\, H_2O} \\times \\frac{2 \\, mol \\, H}{1 \\, mol \\, H_2O} = \\mathbf{0.1115 \\, mol \\, H} $$
                <p><strong>Moles de Azufre (S):</strong></p>
                $$ 1.788 \\, g \\, SO_2 \\times \\frac{1 \\, mol \\, SO_2}{64.07 \\, g \\, SO_2} \\times \\frac{1 \\, mol \\, S}{1 \\, mol \\, SO_2} = \\mathbf{0.0279 \\, mol \\, S} $$
            </div>
            <div class="paso">
                <p><strong>Encontrar la proporción:</strong> Dividimos todos los moles por el valor más pequeño (0.0279).</p>
                <p>C: $ \\frac{0.1116}{0.0279} \\approx 4 $ <br> H: $ \\frac{0.1115}{0.0279} \\approx 4 $ <br> S: $ \\frac{0.0279}{0.0279} = 1 $</p>
                <p>La fórmula empírica es <span class="importante">$C_4H_4S$</span>.</p>
            </div>

            <h3>Parte 2: Masa Molar por Descenso Crioscópico</h3>
            <p>Usaremos la fórmula $\\Delta T_f = K_f \\cdot m$. El problema nos da $\\Delta T_f = 1.183 \\,^\\circ C$ y necesitamos la $K_f$ del benceno, que es un valor estándar de <span class="importante">$5.12 \\, ^\\circ C/m$</span> (dado en el problema 7).</p>
            <div class="paso">
                $$ m = \\frac{\\Delta T_f}{K_f} = \\frac{1.183 \\, ^\\circ C}{5.12 \\, ^\\circ C/m} = 0.231 \\, m $$
                $$ Moles\\,de\\,tiofeno = m \\times kg_{benceno} = 0.231 \\, \\frac{mol}{kg} \\times (\\frac{44.56}{1000} \\, kg) = 0.01029 \\, moles $$
                $$ Masa\\,Molar = \\frac{g_{tiofeno}}{moles_{tiofeno}} = \\frac{0.867 \\, g}{0.01029 \\, moles} = \\mathbf{84.2 \\, g/mol} $$
            </div>

            <h3>Parte 3: Fórmula Molecular</h3>
            <p>Calculamos la masa de nuestra fórmula empírica ($C_4H_4S$): $(4 \\times 12.01) + (4 \\times 1.01) + 32.07 = 84.15 \\, g/mol$.</p>
            <p>Comparamos la masa molar experimental (84.2 g/mol) con la masa de la fórmula empírica (84.15 g/mol). ¡Son prácticamente idénticas! Esto significa que la fórmula empírica ya es la fórmula molecular.</p>
            <p>La fórmula molecular del tiofeno es <span class="importante">$C_4H_4S$</span>.</p>
        `;
    }
    
    // --- Resolución del Problema 10 ---
    const solucion10_gases2 = document.getElementById('solucion10_gases2');
    if (solucion10_gases2) {
        solucion10_gases2.innerHTML = `
            <h3>Plan de Ataque: Antes y Después de la Reacción</h3>
            <p>Este problema tiene dos momentos: 1) justo cuando se mezclan los gases y 2) después de que la reacción ha terminado. La temperatura es constante T = 25°C = <span class="importante">298.15 K</span>.</p>
            
            <h3>Parte 1: Antes de la Reacción</h3>
            <div class="paso">
                <p><strong>1. Calcular los moles iniciales de cada gas:</strong></p>
                $$ n_{NO} = \\frac{PV}{RT} = \\frac{(0.500 \\, atm)(4.00 \\, L)}{(0.08206)(298.15 \\, K)} = \\mathbf{0.0817 \\, mol} $$
                $$ n_{O_2} = \\frac{PV}{RT} = \\frac{(1.00 \\, atm)(2.00 \\, L)}{(0.08206)(298.15 \\, K)} = \\mathbf{0.0817 \\, mol} $$
            </div>
            <div class="paso">
                <p><strong>2. Calcular presiones parciales en el volumen total:</strong><br>
                Al abrir la válvula, el volumen total es $V_{total} = 4.00 + 2.00 = 6.00 \\, L$.</p>
                $$ P_{NO} = \\frac{n_{NO}RT}{V_{total}} = \\frac{(0.0817)(0.08206)(298.15)}{6.00} = \\mathbf{0.333 \\, atm} $$
                $$ P_{O_2} = \\frac{n_{O_2}RT}{V_{total}} = \\frac{(0.0817)(0.08206)(298.15)}{6.00} = \\mathbf{0.333 \\, atm} $$
                <p><strong>3. Presión total antes de la reacción:</strong></p>
                $$ P_{total, antes} = P_{NO} + P_{O_2} = 0.333 + 0.333 = \\mathbf{0.666 \\, atm} $$
            </div>

            <h3>Parte 2: Después de la Reacción</h3>
            <div class="paso">
                <p><strong>1. Ecuación y reactivo limitante:</strong> $2 NO(g) + O_2(g) \\rightarrow 2 NO_2(g)$</p>
                <p>Necesitamos 2 moles de NO por cada 1 de O₂. Para nuestros 0.0817 moles de NO, necesitaríamos $0.0817 / 2 = 0.04085$ moles de O₂. Como tenemos 0.0817 moles de O₂, nos sobra. El <span class="importante">NO es el reactivo limitante</span>.</p>
            </div>
            <div class="paso">
                <p><strong>2. Moles finales de cada gas:</strong></p>
                <ul>
                    <li>$n_{NO, final}$: Se consume todo, <span class="importante">0 mol</span>.</li>
                    <li>$n_{O_2, final}$: $0.0817_{inicial} - 0.04085_{usado} = <span class="importante">0.04085 \\, mol</span>$.</li>
                    <li>$n_{NO_2, final}$: Se forman 2 moles por cada 2 de NO. Se forman <span class="importante">0.0817 mol</span>.</li>
                </ul>
            </div>
            <div class="paso">
                <p><strong>3. Presiones parciales y total finales:</strong></p>
                $$ P_{O_2, final} = \\frac{n_{O_2, final}RT}{V_{total}} = \\frac{(0.04085)(0.08206)(298.15)}{6.00} = \\mathbf{0.167 \\, atm} $$
                $$ P_{NO_2, final} = \\frac{n_{NO_2, final}RT}{V_{total}} = \\frac{(0.0817)(0.08206)(298.15)}{6.00} = \\mathbf{0.333 \\, atm} $$
                $$ P_{total, final} = P_{O_2, final} + P_{NO_2, final} = 0.167 + 0.333 = \\mathbf{0.500 \\, atm} $$
            </div>
        `;
    }
    
    // --- Resolución del Problema 5 ---
    const solucion5_imf = document.getElementById('solucion5_imf');
    if (solucion5_imf) {
        solucion5_imf.innerHTML = `
            <h3>El Secreto: Las Fuerzas Intermoleculares (FIM)</h3>
            <p>Para que una sustancia sea líquida a temperatura ambiente, sus moléculas deben "agarrarse" unas a otras con una fuerza considerable. Si las fuerzas son débiles, las moléculas escapan fácilmente y forman un gas. La clave es identificar la FIM más fuerte de cada sustancia.</p>
            <div class="paso">
                <p><strong>Análisis de los Candidatos:</strong></p>
                <ul>
                    <li><strong>$C_3H_8$ (Propano), $N_2$ (Nitrógeno):</strong> Son moléculas no polares. Su única FIM son las <span class="importante">fuerzas de London</span>, que son muy débiles. Serán gases.</li>
                    <li><strong>$N_2O$ (Óxido Nitroso):</strong> Es una molécula polar (N-N-O). Tiene fuerzas dipolo-dipolo, que son más fuertes que las de London, pero no son extremadamente fuertes. Es un gas (el "gas de la risa").</li>
                    <li><strong>$CH_3OH$ (Metanol):</strong> ¡Esta es la molécula clave! Tiene un grupo hidroxilo (-OH). Esto le permite formar <span class="importante">puentes de hidrógeno</span>, que es el tipo más fuerte de fuerza intermolecular.</li>
                </ul>
            </div>
            <h3>Justificación</h3>
            <p>Los puentes de hidrógeno en el metanol son como un "superpegamento" molecular. Se necesita mucha energía (una temperatura más alta) para romper estos enlaces y que el metanol hierva. Por lo tanto, a temperatura ambiente, el metanol tiene suficiente cohesión para ser un <span class="importante">líquido</span>, mientras que las otras sustancias, con fuerzas mucho más débiles, ya se encuentran en estado gaseoso.</p>
        `;
    }
    
    // --- Resolución del Problema 7 ---
    const solucion7_feromona = document.getElementById('solucion7_feromona');
    if (solucion7_feromona) {
        solucion7_feromona.innerHTML = `
            <h3>Plan de Ataque: Misma Estrategia que el Problema 75</h3>
            <p>Este problema es muy similar al del tiofeno. Necesitamos encontrar la <span class="importante">fórmula empírica</span> (a partir de los porcentajes) y la <span class="importante">masa molar</span> (a partir del descenso crioscópico) para determinar la fórmula molecular.</p>

            <h3>Parte 1: Fórmula Empírica a partir de Porcentajes</h3>
            <p>Asumimos una muestra de 100 g. Los porcentajes se convierten directamente en gramos. Luego, convertimos a moles.</p>
            <div class="paso">
                <p>C: $80.78 \\, g \\, C \\times \\frac{1 \\, mol \\, C}{12.01 \\, g \\, C} = 6.726 \\, mol \\, C$</p>
                <p>H: $13.56 \\, g \\, H \\times \\frac{1 \\, mol \\, H}{1.01 \\, g \\, H} = 13.426 \\, mol \\, H$</p>
                <p>O: $5.66 \\, g \\, O \\times \\frac{1 \\, mol \\, O}{16.00 \\, g \\, O} = 0.354 \\, mol \\, O$</p>
            </div>
            <div class="paso">
                <p><strong>Encontrar la proporción:</strong> Dividimos por el más pequeño (0.354).</p>
                <p>C: $ \\frac{6.726}{0.354} \\approx 19 $ <br> H: $ \\frac{13.426}{0.354} \\approx 38 $ <br> O: $ \\frac{0.354}{0.354} = 1 $</p>
                <p>La fórmula empírica es <span class="importante">$C_{19}H_{38}O$</span>.</p>
            </div>

            <h3>Parte 2: Molalidad y Masa Molar</h3>
            <p>Primero calculamos el descenso de temperatura: $\\Delta T_f = 5.50^\\circ C - 3.37^\\circ C = 2.13^\\circ C$.</p>
            <div class="paso">
                <p><strong>b) Calcule la molalidad de la solución.</strong></p>
                $$ m = \\frac{\\Delta T_f}{K_f} = \\frac{2.13 \\, ^\\circ C}{5.12 \\, ^\\circ C/m} = \\mathbf{0.416 \\, m} $$
            </div>
            <div class="paso">
                <p><strong>Cálculo de la masa molar:</strong></p>
                $$ Moles\\,feromona = m \\times kg_{benceno} = 0.416 \\, \\frac{mol}{kg} \\times (\\frac{8.50}{1000} \\, kg) = 0.003536 \\, moles $$
                $$ Masa\\,Molar = \\frac{g_{feromona}}{moles_{feromona}} = \\frac{1.00 \\, g}{0.003536 \\, moles} = \\mathbf{282.8 \\, g/mol} $$
            </div>

            <h3>Parte 3: a) La Fórmula Molecular del Sólido</h3>
            <p>Calculamos la masa de nuestra fórmula empírica ($C_{19}H_{38}O$): $(19 \\times 12.01) + (38 \\times 1.01) + 16.00 = 282.57 \\, g/mol$.</p>
            <p>La masa molar experimental (282.8 g/mol) y la masa de la fórmula empírica (282.57 g/mol) son idénticas. Por lo tanto, la fórmula molecular es <span class="importante">$C_{19}H_{38}O$</span>.</p>
        `;
    }
}

resolverSegundaMitad();