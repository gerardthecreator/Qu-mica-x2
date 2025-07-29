function resolverPrimeraMitad() {
    
    // --- Resolución del Problema 10 ---
    const solucion10 = document.getElementById('solucion10');
    if (solucion10) {
        solucion10.innerHTML = `
            <h3>Análisis del Diagrama de Fases del Amoníaco (NH₃)</h3>
            <div class="paso">
                <p><strong>a) Identifique las 3 zonas del diagrama de fases</strong></p>
                <p>Las zonas en un diagrama de fases siempre siguen el mismo patrón de izquierda a derecha con el aumento de temperatura: la región de la izquierda (bajas T) es <span class="importante">Sólido</span>, la cuña central es <span class="importante">Líquido</span>, y la región de la derecha y abajo (altas T, bajas P) es <span class="importante">Gas</span>.</p>
            </div>
            <div class="paso">
                <p><strong>b, c, d) ¿Qué representan las curvas A-B, B-C y B-D?</strong></p>
                <ul>
                    <li><strong>Curva A-B:</strong> Es la frontera entre Sólido y Gas. Representa el equilibrio de <span class="importante">sublimación (S↔G)</span>.</li>
                    <li><strong>Curva B-C:</strong> Es la frontera entre Sólido y Líquido. Representa el equilibrio de <span class="importante">fusión (S↔L)</span>.</li>
                    <li><strong>Curva B-D:</strong> Es la frontera entre Líquido y Gas. Representa el equilibrio de <span class="importante">vaporización (L↔G)</span>.</li>
                </ul>
            </div>
            <div class="paso">
                <p><strong>e) ¿Ebulle y se funde el NH₃ a la presión estándar (1 atm)?</strong></p>
                <p>Sí. La presión estándar (1 atm) está por encima de la presión del punto triple (0.06 atm). Para encontrar las temperaturas, localizamos P=1.00 atm en el eje Y y nos movemos horizontalmente:</p>
                <ul>
                    <li><strong>Funde:</strong> Al cruzar la curva B-C (S-L), la temperatura es de <span class="importante">-77.73 °C</span>.</li>
                    <li><strong>Ebulle:</strong> Al cruzar la curva B-D (L-G), la temperatura es de <span class="importante">-33.34 °C</span>.</li>
                </ul>
            </div>
            <div class="paso">
                <p><strong>f) ¿Tendrá el NH₃ punto de sublimación a la presión estándar?</strong></p>
                <p>No. La sublimación solo ocurre a presiones y temperaturas <span class="importante">por debajo del punto triple</span>. A 1 atm, el amoníaco funde, no sublima. La sublimación ocurrirá en cualquier condición a lo largo de la curva A-B, es decir, para presiones en el rango de <span class="importante">0 a 0.06 atm</span>.</p>
            </div>
            <div class="paso">
                <p><strong>g) ¿Qué fases están presentes en el punto triple (B)?</strong></p>
                <p>Por definición, en el punto triple coexisten las tres fases en equilibrio: <span class="importante">Sólido, Líquido y Gas</span>. Las condiciones son las coordenadas del punto B: T = <span class="importante">-77.75 °C</span> y P = <span class="importante">0.06 atm</span>.</p>
            </div>
            <div class="paso">
                <p><strong>h) ¿Qué fases están presentes a T=132 °C y P=111.52 atm?</strong></p>
                <p>Estas son las coordenadas del punto D, el <span class="importante">punto crítico</span>. Por encima de este punto, no hay una distinción clara entre líquido y gas. La sustancia se encuentra en un estado llamado <span class="importante">fluido supercrítico</span>.</p>
            </div>
            <div class="paso">
                <p><strong>i) ¿Bajo qué condiciones es posible tener NH₃ líquido?</strong></p>
                <p>Es posible tener NH₃ líquido en cualquier combinación de presión y temperatura que caiga dentro de la <span class="importante">región en forma de cuña</span> delimitada por las curvas B-C y B-D. Es decir, para temperaturas entre -77.75 °C y 132 °C, y presiones por encima de 0.06 atm.</p>
            </div>
            <div class="paso">
                <p><strong>j) Fase a P=10 atm y T=-20°C y procesos.</strong></p>
                <p>Localizando P=10 atm y T=-20°C en el gráfico, vemos que el punto cae en la región <span class="importante">Líquida</span>.<br>
                - <strong>Proceso a P constante:</strong> Si aumentamos la temperatura a P=10 atm (movernos horizontalmente a la derecha), cruzaremos la curva B-D, y el líquido <span class="importante">hervirá</span> para formar un gas.<br>
                - <strong>Proceso a T constante:</strong> Si reducimos la presión a T=-20°C (movernos verticalmente hacia abajo), cruzaremos la curva B-D, y el líquido <span class="importante">hervirá</span> para formar un gas.</p>
            </div>
        `;
    }
    
    // --- Resolución del Problema 9 ---
    const solucion9_fuerzas = document.getElementById('solucion9_fuerzas');
    if (solucion9_fuerzas) {
        solucion9_fuerzas.innerHTML = `
            <h3>El Ranking de las Fuerzas Intermoleculares (FIM)</h3>
            <p>El truco para ordenar estas moléculas es identificar el tipo de FIM más fuerte que cada una puede presentar. La jerarquía general es: <span class="importante">Puentes de Hidrógeno > Dipolo-Dipolo > Fuerzas de London</span>.</p>
            <div class="paso">
                <p><strong>1. Análisis de cada molécula:</strong></p>
                <ul>
                    <li><strong>$H_2O$ (Agua):</strong> Tiene H unido a O. ¡El rey de los <span class="importante">puentes de hidrógeno</span>! Muy fuerte.</li>
                    <li><strong>$NH_3$ (Amoníaco):</strong> Tiene H unido a N. También forma <span class="importante">puentes de hidrógeno</span>. Son fuertes, pero como el Oxígeno es más electronegativo que el Nitrógeno, los puentes de H del agua son más fuertes que los del amoníaco.</li>
                    <li><strong>$BF_3$ (Trifluoruro de Boro):</strong> Molécula trigonal plana. Aunque los enlaces B-F son polares, la geometría es perfectamente simétrica y los dipolos se cancelan. Es <span class="importante">NO POLAR</span>. Solo tiene <span class="importante">Fuerzas de London</span>.</li>
                    <li><strong>$CH_4$ (Metano):</strong> Molécula tetraédrica. Geometría perfectamente simétrica. Es <span class="importante">NO POLAR</span>. Solo tiene <span class="importante">Fuerzas de London</span>.</li>
                    <li><strong>$N_2$ (Nitrógeno):</strong> Molécula diatómica no polar. Solo tiene <span class="importante">Fuerzas de London</span>.</li>
                </ul>
            </div>
            <div class="paso">
                <p><strong>2. Desempate de las Fuerzas de London:</strong></p>
                <p>Para las moléculas no polares ($N_2$, $CH_4$, $BF_3$), la fuerza de London depende del tamaño y número de electrones. Una molécula más grande y pesada tiene fuerzas de London más fuertes. Ordenamos por masa molar:</p>
                <p>$N_2$ (28 g/mol) < $CH_4$ (16 g/mol) - ¡Ojo! $CH_4$ es más grande y "esponjoso", con más superficie de contacto que $N_2$, por lo que sus fuerzas son ligeramente mayores. $BF_3$ (67.8 g/mol) es la más pesada y grande, por lo que tiene las fuerzas de London más intensas de las tres.</p>
                <p>El orden de las fuerzas de London es: $N_2 < CH_4 < BF_3$.</p>
            </div>
            <h3>Orden Creciente Final</h3>
            <p>Juntando todo, el orden de menor a mayor fuerza intermolecular es:</p>
            <div class="formula">$$ N_2 < CH_4 < BF_3 < NH_3 < H_2O $$</div>
        `;
    }
    
    // --- Resolución del Problema 8 ---
    const solucion8_gases = document.getElementById('solucion8_gases');
    if (solucion8_gases) {
        solucion8_gases.innerHTML = `
            <h3>Plan de Ataque: Un Problema en Dos Etapas</h3>
            <p>Este problema se divide claramente en dos momentos: <strong>a)</strong> justo después de mezclar los gases, y <strong>b)</strong> después de que han reaccionado.</p>
            
            <h3>Parte (a): Mezcla de Gases (Antes de la Reacción)</h3>
            <div class="paso">
                <p><strong>1. Datos iniciales y condiciones de la mezcla:</strong></p>
                <ul>
                    <li>Moles de $O_2$ = 0.1 mol</li>
                    <li>Moles de $SO_2$ = 0.1 mol</li>
                    <li>Moles de $Ar$ = 0.1 mol</li>
                    <li>Volumen total ($V_{total}$) = 1.0 L + 2.0 L = <span class="importante">3.0 L</span></li>
                    <li>Temperatura (constante) T = 60 °C + 273 = <span class="importante">333 K</span></li>
                </ul>
                <p><strong>2. Calcular las presiones parciales:</strong><br>
                Usamos la Ley del Gas Ideal ($P = \\frac{nRT}{V}$) para cada gas en el volumen total.</p>
                $$ P_{O_2} = \\frac{(0.1)(0.082)(333)}{3.0} = \\mathbf{0.909 \\, atm} $$
                $$ P_{SO_2} = \\frac{(0.1)(0.082)(333)}{3.0} = \\mathbf{0.909 \\, atm} $$
                $$ P_{Ar} = \\frac{(0.1)(0.082)(333)}{3.0} = \\mathbf{0.909 \\, atm} $$
                <p><strong>3. Calcular la presión total:</strong><br>
                Según la Ley de Dalton, la presión total es la suma de las presiones parciales.</p>
                $$ P_{total} = P_{O_2} + P_{SO_2} + P_{Ar} = 0.909 + 0.909 + 0.909 = \\mathbf{2.727 \\, atm} $$
            </div>

            <h3>Parte (b): Después de la Reacción</h3>
            <div class="paso">
                <p><strong>1. Ecuación balanceada y reactivo limitante:</strong></p>
                <p>La reacción es: $2 SO_2 + O_2 \\rightarrow 2 SO_3$. La estequiometría es 2 moles de $SO_2$ por cada 1 mol de $O_2$.</p>
                <p>Tenemos 0.1 mol de $SO_2$ y 0.1 mol de $O_2$. ¿Cuánto $O_2$ se necesita para reaccionar con todo el $SO_2$?</p>
                $$ 0.1 \\, mol \\, SO_2 \\times \\frac{1 \\, mol \\, O_2}{2 \\, mol \\, SO_2} = 0.05 \\, mol \\, de \\, O_2 \\, necesarios $$
                <p>Tenemos 0.1 mol de $O_2$ pero solo necesitamos 0.05 mol. ¡El $O_2$ está en exceso! Por lo tanto, el <span class="importante">$SO_2$ es el reactivo limitante</span>.</p>
            </div>
            <div class="paso">
                <p><strong>2. Moles finales de cada gas:</strong></p>
                <ul>
                    <li><strong>$SO_2$:</strong> Se consume todo. Quedan <span class="importante">0 moles</span>.</li>
                    <li><strong>$O_2$:</strong> Teníamos 0.1, se usaron 0.05. Quedan $0.1 - 0.05 = <span class="importante">0.05 \\, moles</span>$.</li>
                    <li><strong>$Ar$:</strong> No reacciona. Quedan <span class="importante">0.1 moles</span>.</li>
                    <li><strong>$SO_3$:</strong> Se producen 2 moles por cada 2 moles de $SO_2$. Se producen <span class="importante">0.1 moles</span>.</li>
                </ul>
            </div>
            <div class="paso">
                <p><strong>3. Presiones parciales y total finales:</strong></p>
                <p>Calculamos las nuevas presiones parciales con los moles finales.</p>
                $$ P_{O_2, final} = \\frac{(0.05)(0.082)(333)}{3.0} = \\mathbf{0.455 \\, atm} $$
                $$ P_{Ar, final} = \\frac{(0.1)(0.082)(333)}{3.0} = \\mathbf{0.909 \\, atm} $$
                $$ P_{SO_3, final} = \\frac{(0.1)(0.082)(333)}{3.0} = \\mathbf{0.909 \\, atm} $$
                <p>Y la presión total final es la suma:</p>
                $$ P_{total, final} = 0.455 + 0.909 + 0.909 = \\mathbf{2.273 \\, atm} $$
            </div>
        `;
    }
}

// Ejecutamos la función para que se cargue el contenido
resolverPrimeraMitad();