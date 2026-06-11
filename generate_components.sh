#!/bin/bash
components=("Header" "Hero" "DarkConversionBand" "CaseStudy" "VideoTestimonials" "SetupSteps" "Features" "AppScreenShowcase" "RevenueEngine" "Pricing" "Configurator" "FAQ" "FinalCTA" "Footer")
for comp in "${components[@]}"; do
  cat << INNER_EOF > src/components/$comp.tsx
import React from 'react';

export function $comp() {
  return (
    <section>
      <h2>$comp Placeholder</h2>
    </section>
  );
}
INNER_EOF
done
chmod +x generate_components.sh
./generate_components.sh
