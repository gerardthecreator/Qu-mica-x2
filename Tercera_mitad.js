function resolverTerceraMitad() {
    
    // --- Resolución del Problema 51 ---
    const solucion51 = document.getElementById('solucion51');
    if (solucion51) {
        solucion51.innerHTML = `
            <h3>Análisis del Diagrama de Fases del Fósforo</h3>
            <p>Este diagrama nos muestra cómo se comporta el fósforo bajo diferentes condiciones de presión y temperatura. Vamos a analizarlo parte por parte.</p>

            <h3>(a) Fases en las regiones con interrogación</h3>
            <div class="paso">
                <p><strong>1. Recordar la disposición estándar:</strong> En un diagrama de fases, al aumentar la temperatura (moverse a la derecha), una sustancia generalmente pasa de Sólido → Líquido → Gas.</p>
                <p><strong>2. Identificar las fases conocidas:</strong> El diagrama etiqueta la región de la izquierda como <span class="importante">Sólido rojo P</span>.</p>
                <p><strong>3. Deducir las fases desconocidas:</strong>
                <ul>
                    <li>La región a la derecha del sólido y a alta presión (la cuña superior) corresponde a la fase <span class="importante">Líquida</span>. Por lo tanto, el <strong>primer (?) (arriba) es Líquido</strong>.</li>
                    <li>La región a temperaturas más altas y presiones más bajas, que está por debajo de las fases sólida y líquida, corresponde a la fase <span class="importante">Gaseosa</span>. Por lo tanto, el <strong>segundo (?) (abajo) es Gas</strong>.</li>
                </ul>
                El punto donde las tres fases se encuentran (a 590 °C y 43 atm) es el <span class="importante">punto triple</span>.</p>
            </div>

            <h3>(b) ¿Por qué no se puede fundir el fósforo rojo en un recipiente abierto?</h3>
            <div class="paso">
                <p><strong>1. Condición del experimento:</strong> "Recipiente abierto a la atmósfera" significa que el experimento se realiza a la presión atmosférica normal, que es <span class="importante">1 atm</span>.</p>
                <p><strong>2. Localizar el punto triple:</strong> El diagrama muestra que el punto triple, que es el punto de <strong>mínima presión</strong> a la que la fase líquida puede existir, se encuentra a <span class="importante">43 atm</span>.</p>
                <p><strong>3. Comparar las presiones:</strong> La presión atmosférica (1 atm) es muchísimo más baja que la presión del punto triple (43 atm). Esto significa que en el diagrama de fases, la línea horizontal que representa 1 atm está muy por debajo de la región líquida.</p>
                <p><strong>Explicación:</strong> Para fundir una sustancia (pasar de sólido a líquido), es necesario estar a una presión igual o superior a la del punto triple. Como 1 atm es inferior a 43 atm, es imposible alcanzar la fase líquida. Si se calienta el fósforo rojo a 1 atm, este seguirá la línea horizontal de P=1 atm hacia la derecha, cruzando directamente la frontera entre Sólido y Gas. Por lo tanto, el fósforo rojo <span class="importante">sublima</span> (pasa directamente de sólido a gas), pero no se funde.</p>
            </div>

            <h3>(c) Cambios de fase desde el punto A al B</h3>
            <div class="paso">
                <p><strong>1. Describir el proceso:</strong> El proceso consiste en reducir la presión a una temperatura constante de 590 °C. Esto corresponde a moverse <span class="importante">verticalmente hacia abajo</span> en el diagrama a lo largo de la línea que une A y B.</p>
                <p><strong>2. Identificar las fases inicial y final:</strong>
                <ul>
                    <li>El <strong>punto A</strong> se encuentra en la región que identificamos como <span class="importante">Líquida</span>.</li>
                    <li>El <strong>punto B</strong> se encuentra en la región que identificamos como <span class="importante">Gaseosa</span>.</li>
                </ul>
                </p>
                <p><strong>3. Señalar el cambio de fase:</strong> El camino de A a B cruza la línea horizontal que sale del punto triple. Esta línea es la frontera que separa la fase líquida de la fase gaseosa a la temperatura del punto triple. La transición de líquido a gas se llama <span class="importante">vaporización</span> o <span class="importante">ebullición</span>.</p>
                <p>Por lo tanto, al reducir la presión desde el punto A hasta el B, el fósforo líquido se vaporiza para convertirse en un gas.</p>
            </div>
        `;
    }
}

// Ejecutamos la función para que se cargue el contenido
resolverTerceraMitad();