import { QUERY_KEY } from '../../../store/keys';
import { clientStorage } from '../../../store/services';
import { useTagsQuery } from '../../../store/services/tags';

const useInitializeApp = () => {
  const isOnboardingCompleted = clientStorage.getItem(
    QUERY_KEY.storage.isOnboardingCompleted,
  );
  const { isLoading: isTagsLoading } = useTagsQuery();

  return {
    isAppReady: !isTagsLoading,
    isOnboardingCompleted: isOnboardingCompleted === 'true',
  };
};

export default useInitializeApp;
