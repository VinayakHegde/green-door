import { Service } from "@/service";
import { useCallback, useEffect, useState } from "react";

const defaultData = {
  name: '',
  make: '',
  colour: '',
  code: '',
  stage: 1,
};

export const useForm = (props: MasterFormProps) => {
  const { item, isCreate, callback } = props;
  const { id, name, make, colour, code } = item ?? {};
  const [localState, setLocalState] = useState(defaultData);
  const setState = (key: string, value: string) => setLocalState(prev => ({
    ...prev,
    [key]: value
  }));

  useEffect(() => {
    if (name && name !== localState.name) {
      setState('name', name ?? '');
    }
    if (make && make !== localState.make) {
      setState('make', make ?? '');
    }
    if (colour && colour !== localState.colour) {
      setState('colour', colour ?? '');
    }
    if (code && code !== localState.code) {
      setState('code', code ?? '');
    }
  }, [name, make, colour, code]);

  useEffect(() => {
    if (localState.stage === 0) {
      callback();
    }
    if (localState.stage === 5) {
      const item = {
        code: localState.code,
        colour: localState.colour,
        make: localState.make,
        name: localState.name,
      }
      isCreate && Service.create(item).then(() => {
        callback();
      }).catch(e => {
        console.warn('Failed to create!');
      });

      !isCreate && id && Service.update(id.toString(), item).then(() => {
        callback();
      }).catch(e => {
        console.warn('Failed to update!');
      })
    }
  }, [localState.stage]);

  const onSubmit = useCallback(async (e: any) => {
    e.preventDefault();
  }, []);

  return { localState, setState, onSubmit };
}