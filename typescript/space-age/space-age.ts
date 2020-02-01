const roundToTwoDecimalPlaces = (n: number): number => {
  return Math.round((n + Number.EPSILON) * 100) / 100;
};

export default class SpaceAge {
  constructor(public readonly seconds: number) {}

  onEarthWithoutPrecision(): number {
    const oneYearInEarthBySeconds = 31557600;

    return this.seconds / oneYearInEarthBySeconds;
  }

  onEarth(): number {
    return roundToTwoDecimalPlaces(this.onEarthWithoutPrecision());
  }

  private calculateYearByEarthYears(orbitalPeriodPerEarthYears: number): number {
    return roundToTwoDecimalPlaces(this.onEarthWithoutPrecision() / orbitalPeriodPerEarthYears);
  }

  onMercury(): number {
    const orbitalPeriodPerEarthYears = 0.2408467;

    return this.calculateYearByEarthYears(orbitalPeriodPerEarthYears);
  }

  onVenus(): number {
    const orbitalPeriodPerEarthYears = 0.61519726;

    return this.calculateYearByEarthYears(orbitalPeriodPerEarthYears);
  }

  onMars(): number {
    const oneYearInEarthBySeconds = 1.8808158;

    return this.calculateYearByEarthYears(oneYearInEarthBySeconds);
  }

  onJupiter(): number {
    const oneYearInEarthBySeconds = 11.862615;

    return this.calculateYearByEarthYears(oneYearInEarthBySeconds);
  }

  onSaturn(): number {
    const oneYearInEarthBySeconds = 29.447498;

    return this.calculateYearByEarthYears(oneYearInEarthBySeconds);
  }

  onUranus(): number {
    const oneYearInEarthBySeconds = 84.016846;

    return this.calculateYearByEarthYears(oneYearInEarthBySeconds);
  }

  onNeptune(): number {
    const oneYearInEarthBySeconds = 164.79132;

    return this.calculateYearByEarthYears(oneYearInEarthBySeconds);
  }
}
