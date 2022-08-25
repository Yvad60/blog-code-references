describe('simple tests', () => {
  it('should find true to be true', () => {
    expect(true).toBe(true);
  });

  it('should find false to be different from true', () => {
    expect(false).not.toBe(true);
  });
});
