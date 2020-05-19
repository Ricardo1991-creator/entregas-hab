"use strict";

let equipoMaria = [62, 34, 55];
let equipoPaula = [35, 60, 59];
let equipoRebeca = [40, 39, 63];

function media(equipo) {
  return (equipo[0] + equipo[1] + equipo[2]) / team.length;
}

console.log(
  `La media de puntos del Equipo María es ${Math.round(media(equipoMaria))}`
);

console.log(
  `La media de puntos del Equipo Paula es ${Math.round(media(equipoPaula))}`
);

console.log(
  `La media de puntos del Equipo Rebeca es ${Math.round(media(equipoRebeca))}`
);

if (
  media(equipoMaria) > media(equipoPaula) &&
  media(equipoMaria) > media(equipoRebeca)
) {
  console.log(
    `La media más alta es la del equipo de María con ${Math.round(
      media(equipoMaria)
    )}`
  );
} else if (
  media(equipoPaula) > media(equipoMaria) &&
  media(equipoMaria) > media(equipoRebeca)
) {
  console.log(
    `La media más alta es la del equipo de Paula con ${Math.round(
      media(equipoPaula)
    )}`
  );
} else {
  console.log(
    `La media más alta es la del equipo de Rebeca con ${Math.round(
      media(equipoRebeca)
    )}`
  );
}
