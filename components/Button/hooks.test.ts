import { act, renderHook } from '../../src/testUtils';
import { useIsPressed } from './hooks';

describe('Button Hooks', () => {
  test('useIsPressed onPressIn', () => {
    // when
    const { result } = renderHook(() => useIsPressed());

    // then
    expect(result.current.isPressed).toBe(false);

    // when
    act(() => {
      result.current.pressableProps.onPressIn();
    });

    // then
    expect(result.current.isPressed).toBe(true);
  });

  test('useIsPressed onPressOut', () => {
    // when
    const { result } = renderHook(() => useIsPressed());

    // then
    expect(result.current.isPressed).toBe(false);

    // when
    act(() => {
      result.current.pressableProps.onPressIn();
      result.current.pressableProps.onPressOut();
    });

    // then
    expect(result.current.isPressed).toBe(false);
  });
});