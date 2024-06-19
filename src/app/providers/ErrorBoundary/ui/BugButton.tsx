import React from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from 'shared/ui';

export const BugButton: React.FC = () => {
    const { t } = useTranslation();
    const [isError, setIsError] = React.useState<boolean>(false);

    const throwError = () => setIsError(true);

    React.useEffect(() => {
        if (!isError) return;

        throw new Error();
    }, [isError]);

    return (
        <Button onClick={throwError}>
            {t('Бросить ошибку')}
        </Button>
    );
};
