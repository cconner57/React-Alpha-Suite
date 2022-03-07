import { useState, useEffect, useCallback } from 'react';

const useAsync = (
	asyncFunction: () => Promise<any>,
	immediate: Boolean = true
) => {
	const [status, setStatus] = useState<'idle' | 'pending' | 'success' | 'error'>('idle');
	const [value, setValue] = useState<string | null>(null);
	const [error, setError] = useState<boolean | null>(null);

	const execute = useCallback(async () => {
		try {
			setStatus('pending');
			setValue(null);
			setError(null);
			const response = await asyncFunction();
			setValue(response);
			setStatus('success');
		} catch (error: any) {
			setError(error);
			setStatus('error');
		}
	}, [asyncFunction]);

	useEffect(() => {
		if (immediate) {
			execute();
		}
	}, [execute, immediate]);
	return { execute, status, value, error };
};

export default useAsync;

/*
Usage:
	const { execute, status, value, error } = useAsync<string>(myFunction, false);
	status === 'idle' && <div>Start your journey by clicking a button</div>}
	status === 'success' && <div>{value}</div>
	status === 'error' && <div>{error}</div>
	<button onClick={execute} disabled={status === 'pending'}>
		{status !== 'pending' ? 'Click me' : 'Loading...'}
	</button>
*/
