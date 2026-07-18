type Size = 'sm' | 'md' | 'lg';
type Color = 'primary' | 'secondary' | 'danger';
type State = 'hover' | 'active' | 'disabled';

// 生成所有可能的类名组合
type UtilityClass = `u-${Size}` | `text-${Color}` | `bg-${Color}` | `is-${State}`;