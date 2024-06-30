'use client';
import { Bell, Check, X } from 'lucide-react';
import { Wrapper } from './pages.styles';
import { Notification } from '@/components/Notification';

export default function Home() {
  return (
    <Wrapper>
      <h1>React Composition Pattern</h1>
      <Notification.Root>
        <Notification.Icon icon={Bell} />
        <Notification.Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Notification.Content>
        <Notification.ActionsButtons>
          <Notification.ActionButton onClick={() => console.log('cancel')}>
            <Notification.Icon icon={X} />
          </Notification.ActionButton>
          <Notification.ActionButton onClick={() => console.log('confirm')}>
            <Notification.Icon icon={Check} />
          </Notification.ActionButton>
        </Notification.ActionsButtons>
      </Notification.Root>

      <Notification.Root>
        <Notification.Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Notification.Content>
      </Notification.Root>

      <Notification.Root>
        <Notification.Icon icon={Bell} />
        <Notification.Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Notification.Content>
      </Notification.Root>
    </Wrapper>
  );
}
