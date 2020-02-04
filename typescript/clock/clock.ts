class Clock {
  private ONE_HOUR_IN_MINUTES = 60;
  private ONE_DAY_IN_HOURS = 24;
  private ONE_DAY_IN_MINUTES = this.ONE_HOUR_IN_MINUTES * this.ONE_DAY_IN_HOURS;

  constructor(
    private hours: number = 0,
    private minutes: number = 0,
    private humanReadable = '00:00'
  ) {
    const totalMinutes = this.getPositiveMinutes(hours, minutes);
    this.humanReadable = this.generateHumanReadable(totalMinutes);
  }

  private getPositiveMinutes(hours: number, minutes: number): number {
    const hoursToMinutes = (hours % this.ONE_DAY_IN_HOURS) * this.ONE_HOUR_IN_MINUTES;
    const totalMinutes = hoursToMinutes + minutes;
    const remainingMinutes = totalMinutes % this.ONE_DAY_IN_MINUTES;
    const positiveMinutes = totalMinutes >= 0 ? remainingMinutes : this.ONE_DAY_IN_MINUTES - Math.abs(remainingMinutes);
    return positiveMinutes;
  }

  private generateHumanReadable(totalMinutes: number): string {
    const hours = Math.trunc(totalMinutes / this.ONE_HOUR_IN_MINUTES);
    const minutes = totalMinutes % this.ONE_HOUR_IN_MINUTES;

    return [hours, minutes]
      .map(unit => unit.toString().padStart(2, '0'))
      .join(':');
  }

  public toString(): string {
    return this.humanReadable;
  }

  public plus(minutes: number): Clock {
    return new Clock(this.hours, this.minutes + minutes);
  }

  public minus(minutes: number): Clock {
    return new Clock(this.hours, this.minutes - minutes);
  }

  public equals(clock: Clock): boolean {
    return clock.humanReadable === this.humanReadable;
  }
}

export default Clock;
