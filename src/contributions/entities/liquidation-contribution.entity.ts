import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Contribution } from './';
import { Liquidation } from './';

@Entity({ schema: 'contributions', name: 'liquidation_contributions', synchronize: false })
export class LiquidationContribution {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ name: 'liquidation_id', type: 'bigint' })
  liquidationId: number;

  @Column({ name: 'contribution_id', type: 'bigint' })
  contributionId: number;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp', nullable: true })
  deletedAt: Date;

  @ManyToOne(() => Contribution, (contribution) => contribution.liquidationContributions)
  contribution: Contribution;

  @ManyToOne(() => Liquidation, (liquidation) => liquidation.liquidationContributions)
  liquidation: Liquidation;
}
