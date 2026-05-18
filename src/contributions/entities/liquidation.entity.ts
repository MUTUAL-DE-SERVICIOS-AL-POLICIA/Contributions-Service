import { ContributionProcedure } from './';
import { LiquidationContribution } from './';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity({ schema: 'contributions', name: 'liquidations', synchronize: false })
export class Liquidation {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ name: 'contribution_procedure_id', type: 'int' })
  contributionProcedureId: number;

  @Column({ type: 'int' })
  number: number;

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  total: number;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp', nullable: true })
  deletedAt: Date;

  @ManyToOne(() => ContributionProcedure, (contributionProcedure) => contributionProcedure.liquidations)
  contributionProcedure: ContributionProcedure;

  @OneToMany(() => LiquidationContribution, (liquidationContribution) => liquidationContribution.liquidation)
  liquidationContributions: LiquidationContribution[];

}
