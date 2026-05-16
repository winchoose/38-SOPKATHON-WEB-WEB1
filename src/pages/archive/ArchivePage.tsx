import { useState, useEffect } from 'react';
import Layout from '../../layout/Layout';
import { Input } from '../../shared/components/Input';
import { MosCard } from '../../shared/components/MosCard';
import Header from '../home/components/Header';
import { Chip } from './components/chip';
import { getArchives } from './apis/archive';
import type { ArchiveItem } from '../../shared/types/types';
import { convertHangulToMorse } from '../../shared/utils/morse';
import { useNavigate } from 'react-router-dom';

const COLORS = ['text-primary-orange', 'text-primary-red', 'text-primary-blue'];

const ArchivePage = () => {
  const navigate = useNavigate();
  const [sender, setSender] = useState('');
  const [receiver, setReceiver] = useState('');
  const [archives, setArchives] = useState<ArchiveItem[]>([]);
  const [selected, setSelected] = useState('전체');
  const [archiveColors, setArchiveColors] = useState<string[]>([]);

  useEffect(() => {
    getArchives().then((res) => {
      const data = res ?? [];
      setArchives(data);
      setArchiveColors(
        data.map(() => COLORS[Math.floor(Math.random() * COLORS.length)]),
      );
    });
  }, []);

  const filteredArchives =
    sender && receiver
      ? archives.filter(
          (item) =>
            item.senderInitial === sender && item.receiverInitial === receiver,
        )
      : archives;

  return (
    <div>
      <Header title="아카이빙" />
      <Layout>
        <Input
          sender={sender}
          receiver={receiver}
          onSenderChange={(e) => setSender(e.target.value)}
          onReceiverChange={(e) => setReceiver(e.target.value)}
        />
        <div className="flex gap-2 pt-4.5 pb-7.5">
          {['전체', '사랑', '용기', '솔직함'].map((chip) => (
            <Chip
              key={chip}
              label={chip}
              isSelected={selected === chip}
              onClick={() => setSelected(chip)}
            />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3">
          {filteredArchives.map((item, index) => (
            <div
              key={item.savedMessageId}
              className="cursor-pointer"
              onClick={() =>
                navigate(`/archives/${item.savedMessageId}`, {
                  state: { message: item },
                })
              }
            >
              <MosCard
                content={convertHangulToMorse(item.content)}
                sender={item.senderInitial}
                receiver={item.receiverInitial}
                date={item.createdAt}
                contentClassName={`font-black tracking-widest ${archiveColors[index]}`}
              />
            </div>
          ))}
        </div>
      </Layout>
    </div>
  );
};

export default ArchivePage;
