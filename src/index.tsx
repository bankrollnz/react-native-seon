import { NativeModules } from 'react-native';

type SeonType = {
  multiply(a: number, b: number): Promise<number>;
};

const { Seon } = NativeModules;

export default Seon as SeonType;
